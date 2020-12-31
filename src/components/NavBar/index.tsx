import React, { useState } from 'react';

import { HiMenu } from 'react-icons/hi';
import { MdExitToApp } from 'react-icons/md';

import { useHistory } from 'react-router-dom';
import { stringify } from 'querystring';
import { Nav, HelpMenu, ConfigMenu } from './styles';
import { useAuth } from '../../hooks/Auth';

const NavBar: React.FC = () => {
  const [hiddenHelp, setHiddenHelp] = useState(false);
  const [hiddenConfig, setHiddenConfig] = useState(false);
  const { signOut } = useAuth();
  const history = useHistory();

  const handleSingOut = () => {
    signOut();
    history.push('/');
  };
  const handleChangeTheme = () => {
    const theme = Boolean(localStorage.getItem('@ReactDashboard:theme'));
    const changeValueTheme = !theme;
    console.log(changeValueTheme);

    localStorage.setItem('@ReactDashboard:theme', changeValueTheme.toString());
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
                <button type="button" onClick={() => handleChangeTheme()}>
                  Tema Dark
                </button>
              </li>
              <li>
                <button type="button" onClick={() => handleChangeTheme()}>
                  Tema Light
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
