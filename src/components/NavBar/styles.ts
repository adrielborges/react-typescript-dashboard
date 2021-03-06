import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 50px;

  color: ${props => props.theme.colors.button_text};
  background-color: ${props => props.theme.colors.button_Background};

  padding: 0 15px;

  svg {
    width: 25px;
    height: 25px;
  }
  div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    > button {
      cursor: pointer;
      height: 25px;
      border: none;

      background: ${props => props.theme.colors.button_Background};
      color: ${props => props.theme.colors.button_text};
    }
    button:first-of-type {
      margin-right: 20px;
    }
  }
`;

export const HelpMenu = styled.div`
  position: absolute;
  display: flex;

  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 105px;
  margin-right: 96px;
  padding: 2px 10px 3px 10px;

  color: ${props => props.theme.colors.button_text};
  background: ${props => props.theme.colors.button_Background};

  ul {
    list-style: none;
    li {
      width: auto;

      button {
        display: flex;
        text-decoration: none;
        border: none;

        background: ${props => props.theme.colors.button_Background};
        color: ${props => props.theme.colors.button_text};
      }
    }
  }
`;

export const ConfigMenu = styled.div`
  position: absolute;
  display: flex;

  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 120px;
  margin-right: -60px;
  padding: 2px 10px 3px 10px;

  color: ${props => props.theme.colors.button_text};
  background: ${props => props.theme.colors.button_Background};

  ul {
    list-style: none;
    li {
      width: auto;
      margin-bottom: 10px;
      button {
        display: flex;
        text-decoration: none;
        border: none;

        background: ${props => props.theme.colors.button_Background};
        color: ${props => props.theme.colors.button_text};
      }
    }
  }
`;
