import React, { useEffect, useState } from 'react';

import api from '../../services/api';
import { useTasks } from '../../hooks/Tasks';

import { Container, FavoriteWrap, TaskDetails } from './styles';

interface Imenu {
  id: number;
  name: string;
  subMenus: IsubMenus[];
}
interface IsubMenus {
  id: number;
  name: string;
}

const SideMenu: React.FC = () => {
  const [menu, setMenu] = useState<Imenu[]>([]);
  const { handleFilterIdTask } = useTasks();

  useEffect(() => {
    (async function getMenu() {
      const { data } = await api.get('/menus');
      setMenu(data);
    })();
  }, []);

  return (
    <Container>
      <FavoriteWrap>
        <span>Favoritos</span>
        <span>20</span>
      </FavoriteWrap>

      {menu.map(item => (
        <div key={item.id}>
          <TaskDetails>
            <summary>
              <span>{item.name}</span>
              <span>{item.subMenus.length}</span>
            </summary>
            {item.subMenus.map(subMenu => (
              <div key={subMenu.id}>
                <button
                  type="button"
                  onClick={() => handleFilterIdTask(subMenu.id)}
                >
                  {subMenu.name}
                </button>
              </div>
            ))}
          </TaskDetails>
        </div>
      ))}
    </Container>
  );
};

export default SideMenu;
