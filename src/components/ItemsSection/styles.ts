import styled from 'styled-components';

export const Container = styled.div``;

export const ContainerItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 10px;
  margin-bottom: 10px;
  border-radius: 8px;

  width: 100%;
  height: 120px;

  background: ${props => props.theme.colors.background_item};
`;
export const NameWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  div + div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    margin-left: 10px;

    span {
      color: ${props => props.theme.colors.text};
      svg {
        padding-top: 5px;
        height: 20px;
        width: 20px;
      }
    }
  }
`;
export const ContainerCheckIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  width: 40px;
  height: 40px;

  input {
    position: absolute;
  }
`;

export const ContainerWrapItemsRigth = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  height: 100%;
`;
export const ContainerIconWrapUsers = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 10px;
  div {
    margin-right: -10px;
  }
`;
