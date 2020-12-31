import React, { useState } from 'react';

import { RiArrowRightSFill, RiChat4Fill } from 'react-icons/ri';
import { useTasks } from '../../hooks/Tasks';
import IconNameWrap from '../IconNameWrap';

import {
  Container,
  ContainerItem,
  NameWrap,
  ContainerCheckIcon,
  ContainerWrapItemsRigth,
  ContainerIconWrapUsers,
} from './styles';

interface IItem {
  id: number;
  subMenus: IsubMenuItem[];
}
interface IsubMenuItem {
  id: number;
  name: string;
  owner: string;
  subject: string;
  users: string[];
}

const ItemsSection: React.FC = () => {
  const [isCheckedVisable, setIsCheckedVisable] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [taskSelected, setTaskSelected] = useState<string[]>([]);

  const { stateFilteredTasks } = useTasks();

  const handleIsChecked = () => {
    setIsCheckedVisable(!isCheckedVisable);
  };

  const handleAddSelectedTasks = (id: string) => {
    const findTaskId = taskSelected.find(task => task === id);
    if (findTaskId) {
      const newTaskId = taskSelected.filter(task => task !== id);
      setTaskSelected(newTaskId);
      return setIsChecked(true);
    }
    setTaskSelected(oldState => [...oldState, id]);
    return setIsChecked(true);
  };

  return (
    <Container>
      {stateFilteredTasks.map(task => (
        <div key={task.id}>
          {task.subMenuItems.map(item => (
            <ContainerItem key={item.id}>
              <NameWrap>
                <ContainerCheckIcon
                  onMouseEnter={handleIsChecked}
                  onMouseLeave={handleIsChecked}
                >
                  {(isCheckedVisable || isChecked) && (
                    <input
                      type="checkbox"
                      onChange={() => handleAddSelectedTasks(item.id)}
                    />
                  )}
                  {!isChecked && !isCheckedVisable && (
                    <IconNameWrap owner={item.owner} />
                  )}
                </ContainerCheckIcon>
                <div>
                  <span>
                    <b>{item.name}</b>
                  </span>

                  <span>
                    <RiChat4Fill />
                    {item.subject}
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
                  {item.users.map(user => (
                    <IconNameWrap key={user} owner={item.owner} />
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
