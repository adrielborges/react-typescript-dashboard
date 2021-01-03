import React, { useState } from 'react';

import { HiMenu } from 'react-icons/hi';
import { MdExitToApp } from 'react-icons/md';

import { useHistory } from 'react-router-dom';
import { Nav, HelpMenu, ConfigMenu } from './styles';
import { useAuth } from '../../hooks/Auth';
import { useTheme } from '../../hooks/Theme';

const NavBar: React.FC = () => {
  const [hiddenHelp, setHiddenHelp] = useState(false);
  const [hiddenConfig, setHiddenConfig] = useState(false);
  const { signOut } = useAuth();
  const history = useHistory();
  const { toggleTheme } = useTheme();

  const handleSingOut = () => {
    signOut();
    history.push('/');
  };

  return (
    <Nav>
      <div>
        <HiMenu />
      </div>
      <div>
        <button type="button" onClick={() => setHiddenHelp(!hiddenHelp)}>
          Ajuda
        </button>
        {hiddenHelp && (
          <HelpMenu>
            <ul>
              <li>
                <button type="button">Pt-Br</button>
              </li>
              <li>
                <button type="button">En-Us</button>
              </li>
              <li>
                <button type="button">Es-Es</button>
              </li>
            </ul>
          </HelpMenu>
        )}

        <button type="button" onClick={() => setHiddenConfig(!hiddenConfig)}>
          Configurações
        </button>
        {hiddenConfig && (
          <ConfigMenu>
            <ul>
              <li>
                <button type="button" onClick={() => toggleTheme()}>
                  Mudar Tema
                </button>
              </li>
              <li>
                <button type="button" onClick={() => handleSingOut()}>
                  Logout
                  <MdExitToApp />
                </button>
              </li>
            </ul>
          </ConfigMenu>
        )}
      </div>
    </Nav>
  );
};

export default NavBar;
