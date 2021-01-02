import React, { useEffect, useState } from 'react';

import api from '../../services/api';
import { useTasks } from '../../hooks/Tasks';

import { Container, FavoriteWrap, TaskDetails } from './styles';

interface Menu {
  id: number;
  name: string;
  subMenus: Submenus[];
}
interface Submenus {
  id: number;
  name: string;
}

const SideMenu: React.FC = () => {
  const [menus, setMenus] = useState<Menu[]>([]);
  const { handleIdDefinitionOfSelectedSubtask } = useTasks();

  useEffect(() => {
    (async function loadMenu() {
      const { data } = await api.get('/menus');
      setMenus(data);
    })();
  }, []);

  return (
    <Container>
      <FavoriteWrap>
        <span>Favoritos</span>
        <span>20</span>
      </FavoriteWrap>

      {menus.map(menu => (
        <div key={menu.id}>
          <TaskDetails>
            <summary>
              <span>{menu.name}</span>
              <span>{menu.subMenus.length}</span>
            </summary>
            {menu.subMenus.map(subMenu => (
              <div key={subMenu.id}>
                <button
                  type="button"
                  onClick={() =>
                    handleIdDefinitionOfSelectedSubtask(subMenu.id)
                  }
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
