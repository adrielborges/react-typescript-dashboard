import React, { useEffect, useState } from 'react';

import { RiArrowRightSFill, RiChat4Fill } from 'react-icons/ri';
import { useTasks, Task } from '../../hooks/Tasks';
import IconNameWrap from '../IconNameWrap';

import {
  Container,
  ContainerItem,
  NameWrap,
  ContainerCheckIcon,
  ContainerWrapItemsRigth,
  ContainerIconWrapUsers,
} from './styles';

const ItemsSection: React.FC = () => {
  const [isCheckboxVisible, setIsCheckboxVisible] = useState(false);

  const {
    tasks,
    selectedSubtaskId,
    selectedTasksId,
    handleAddingIdForSelectedTasks,
  } = useTasks();

  return (
    <Container>
      {tasks
        .filter(subtask => subtask.id === selectedSubtaskId)
        .map(subtasks => (
          <div key={subtasks.id}>
            {subtasks.subMenuItems.map(task => (
              <ContainerItem key={task.id}>
                <NameWrap>
                  <ContainerCheckIcon
                    onMouseEnter={() => setIsCheckboxVisible(true)}
                    onMouseLeave={() => setIsCheckboxVisible(false)}
                  >
                    {(isCheckboxVisible || selectedTasksId.length !== 0) && (
                      <input
                        type="checkbox"
                        checked={selectedTasksId.includes(task.id)}
                        onChange={() => handleAddingIdForSelectedTasks(task.id)}
                      />
                    )}
                    {!isCheckboxVisible && selectedTasksId.length === 0 && (
                      <IconNameWrap owner={task.owner} />
                    )}
                  </ContainerCheckIcon>
                  <div>
                    <span>
                      <b>{task.name}</b>
                    </span>

                    <span>
                      <RiChat4Fill />
                      {task.subject}
                    </span>

                    <span>
                      <RiArrowRightSFill size={25} />
                      Tarefa 1
                    </span>
                  </div>
                </NameWrap>

                <ContainerWrapItemsRigth>
                  <span> hoje, 15:54 </span>

                  <ContainerIconWrapUsers>
                    {task.users.map(user => (
                      <IconNameWrap key={user} owner={task.owner} />
                    ))}
                  </ContainerIconWrapUsers>
                </ContainerWrapItemsRigth>
              </ContainerItem>
            ))}
          </div>
        ))}
    </Container>
  );
};

export default ItemsSection;
