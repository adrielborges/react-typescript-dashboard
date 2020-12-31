import styled from 'styled-components';

export const Container = styled.div`
  width: 350px;
  height: 90px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  div:first-of-type {
    width: 50px;
    height: 50px;

    margin-left: 15px;

    display: flex;
    justify-content: center;
    align-items: center;

    background: red;
    border-radius: 50%;

    color: #fcfcfc;

    div {
      position: absolute;
      margin-left: 30px;
      margin-top: 30px;

      width: 15px;
      height: 15px;

      background-color: green;
    }
  }
`;
