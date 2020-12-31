import styled from 'styled-components';
import theme from '../../styles/themes/theme';

export const Container = styled.div`
  height: 100vh;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  svg {
    width: 250px;
    height: 250px;

    color: ${theme.colors.button_Background};
  }

  form {
    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;

    > input {
      width: 300px;
      height: 40px;

      margin-top: 15px;
      border-radius: 8px;

      padding-left: 15px;
    }
    button {
      width: 150px;
      height: 40px;

      margin-top: 15px;
      border-radius: 5px;

      color: ${theme.colors.button_text};
      background: ${theme.colors.button_Background};
    }
  }
`;
