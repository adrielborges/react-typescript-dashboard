import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
} from 'react';
import api from '../services/api';

interface Task {
  id: number;
  subMenuItems: {
    id: string;
    name: string;
    subject: string;
    owner: string;
    users: string[];
  }[];
}

interface TaskContext {
  handleIdDefinitionOfSelectedSubtask(subtaskId: number): void;
  handleAddingIdForSelectedTasks(taskId: string): void;
  handleDeletingSelectedTasks(subtaskId: number, tasksId: string[]): void;
  tasks: Task[];
  selectedTasksId: string[];
  selectedSubtaskId: number;
}

export const TaskContext = createContext({} as TaskContext);

export const TaskProvider: React.FC = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [selectedSubtaskId, setSelectedSubtaskId] = useState(0);
  const [selectedTasksId, setSelectedTasksId] = useState<string[]>([]);

  useEffect(() => {
    (async function loadTask() {
      const { data } = await api.get('/items');

      setTasks(data);
    })();
  }, []);

  const handleIdDefinitionOfSelectedSubtask = useCallback(
    (subtaskId: number) => {
      setSelectedSubtaskId(subtaskId);
      setSelectedTasksId([]);
    },
    [],
  );

  const handleAddingIdForSelectedTasks = useCallback(
    (taskId: string) => {
      const findTaskId = selectedTasksId.find(id => id === taskId);

      if (findTaskId) {
        const newSelectedTaskId = selectedTasksId.filter(id => id !== taskId);
        return setSelectedTasksId(newSelectedTaskId);
      }

      return setSelectedTasksId(selectedOldTasks => [
        ...selectedOldTasks,
        taskId,
      ]);
    },
    [selectedTasksId],
  );

  // const handleSelectAll = useCallback(() => {

  // }, []);

  const handleDeletingSelectedTasks = useCallback(
    (subtaskId: number, tasksId: string[]) => {
      const copyTasks = tasks;

      const findSubtaskIndex = copyTasks.findIndex(
        subtask => subtask.id === subtaskId,
      );

      const findSubtask = copyTasks.find(subtask => subtask.id === subtaskId);

      if (findSubtaskIndex >= 0 && findSubtask) {
        let { subMenuItems } = findSubtask;
        const { id } = findSubtask;

        tasksId.forEach(taskId => {
          subMenuItems = subMenuItems.filter(task => task.id !== taskId);
        });

        const newTasks = copyTasks.fill(
          {
            id,
            subMenuItems,
          },
          findSubtaskIndex,
          findSubtaskIndex + 1,
        );

        setTasks(newTasks);

        setSelectedTasksId([]);
      }
    },
    [tasks],
  );

  return (
    <TaskContext.Provider
      value={{
        tasks,
        selectedTasksId,
        selectedSubtaskId,
        handleIdDefinitionOfSelectedSubtask,
        handleAddingIdForSelectedTasks,
        handleDeletingSelectedTasks,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export function useTasks(): TaskContext {
  const context = useContext(TaskContext);

  if (!context) {
    throw new Error('useTasks must be used within an TaskProvider');
  }

  return context;
}
