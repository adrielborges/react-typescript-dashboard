import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
} from 'react';
import api from '../services/api';

export interface Task {
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
  handleSelectAll(): void;
  tasks: Task[];
  selectedTasksId: string[];
  selectedSubtaskId: number;
  allSelectedTasks: boolean;
  totalTasks: number;
}

export const TaskContext = createContext({} as TaskContext);

export const TaskProvider: React.FC = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [selectedSubtaskId, setSelectedSubtaskId] = useState(0);
  const [selectedTasksId, setSelectedTasksId] = useState<string[]>([]);
  const [allSelectedTasks, setAllSelectedTasks] = useState(false);
  const [totalTasks, setTotalTasks] = useState(0);

  useEffect(() => {
    (async function loadTask() {
      const { data } = await api.get('/items');

      setTasks(data);
    })();
  }, []);

  const handleTotalTasks = useCallback(
    (allTasks: Task[], subtaskId: number): number => {
      const filtered = allTasks.filter(subtask => subtask.id === subtaskId);

      const total = filtered.reduce((accumulator, value) => {
        return value.subMenuItems.length;
      }, 0);

      return total;
    },
    [],
  );

  useEffect(() => {
    setTotalTasks(handleTotalTasks(tasks, selectedSubtaskId));
  }, [selectedSubtaskId, tasks, handleTotalTasks]);

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
      setAllSelectedTasks(false);

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

  const handleSelectAll = useCallback(() => {
    if (allSelectedTasks) {
      setAllSelectedTasks(false);
      return setSelectedTasksId([]);
    }

    const filteredTasks = tasks.filter(
      subtask => subtask.id === selectedSubtaskId,
    );

    const subTaskItemId = filteredTasks.map(id =>
      id.subMenuItems.map(allSubMenuId => allSubMenuId.id),
    );
    setAllSelectedTasks(true);
    return setSelectedTasksId(subTaskItemId[0]);
  }, [tasks, selectedSubtaskId, allSelectedTasks]);

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

        setTotalTasks(handleTotalTasks(tasks, selectedSubtaskId));
      }
    },
    [tasks, selectedSubtaskId, handleTotalTasks],
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
        handleSelectAll,
        allSelectedTasks,
        totalTasks,
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
