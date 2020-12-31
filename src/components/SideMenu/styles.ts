import styled from 'styled-components';

export const Container = styled.div`
  height: auto;
  width: 350px;
  font-size: 18px;
`;

export const FavoriteWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TaskDetails = styled.details`
  margin-top: 25px;

  summary {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;

    span:first-of-type {
      margin-left: -200px;
    }
  }

  div {
    display: flex;
    justify-content: space-between;

    padding-left: 70px;
    padding-top: 25px;
    button {
      text-decoration: none;
      border: none;
    }
  }
`;
