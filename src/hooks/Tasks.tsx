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
      id: string;
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

  const handleDeleteSelectedTask = useCallback((selectedTask: string[]) => {
    const submenuItems = tasks.map(task=>task.subMenuItems);

    selectedTask.forEach(taskId=>{
      submenuItems.filter(item=>item.id
    });
  },
  []);

  return (
    <TaskContext.Provider
      value={{ handleFilterIdTask, tasks, stateFilteredTasks }}
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
