import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
} from 'react';
import api from '../services/api';

interface IItem {
  id: number;
  subMenuItems: [
    {
      id: string; // unicos em toda a aplicação
      name: string;
      subject: string;
      owner: string;
      users: string[];
    },
  ];
}

interface IContext {
  handleFilterIdTask(id: number): void;
  tasks: IItem[];
  stateFilteredTasks: IItem[];
  handleDeleteSelectedTask(idItem: number, selectedTask: string[]): void;
}

export const TaskContext = createContext({} as IContext);

export const TaskProvider: React.FC = ({ children }) => {
  const [tasks, setTasks] = useState<IItem[]>([]);
  const [stateFilteredTasks, setStateFilteredTasks] = useState<IItem[]>([]);

  useEffect(() => {
    (async function loadTasks() {
      const { data } = await api.get('/items');

      setTasks(data);
    })();
  }, []);

  const handleFilterIdTask = useCallback(
    (id: number) => {
      const filteredTasks = tasks.filter(task => task.id === id);

      setStateFilteredTasks(filteredTasks);
    },
    [tasks],
  );

  const handleDeleteSelectedTask = useCallback(
    (idItem: number, selectedTask: string[]) => {
      const copyStateTask = tasks;
      const findItemIndex = copyStateTask.findIndex(item => item.id === idItem);

      if (findItemIndex >= 0) {
        const { subMenuItems } = copyStateTask[findItemIndex];
        const newSubMenuItems = selectedTask.reduce((accumulator, value) => {
          return accumulator.filter(item => item.id !== value);
        }, subMenuItems);
      }

      // delete no database axios;
    },
    [tasks],
  );

  return (
    <TaskContext.Provider
      value={{
        handleFilterIdTask,
        tasks,
        stateFilteredTasks,
        handleDeleteSelectedTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export function useTasks(): IContext {
  const context = useContext(TaskContext);

  if (!context) {
    throw new Error('useTasks must be used within an AuthProvider ');
  }

  return context;
}
