import styled from 'styled-components';
// import theme from '../../styles/themes/theme';

export const Container = styled.div`
  margin: 30px 0;
`;

export const Input = styled.input`
  padding: 10px 0 10px 10px;
  width: 100%;
  border: solid #757575 0.5px;
  border-radius: 8px;
`;

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: space-between;
  align-items: center;

  margin: 25px 0;

  svg {
    width: 30px;
    height: 30px;

    cursor: pointer;
  }
`;
export const FilterButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding-left: 10px;
  height: 50px;
`;

export const FilterInput = styled.input`
  height: 20px;
  width: 20px;
`;
export const FilterButton = styled.button`
  margin-left: 15px;

  padding: 10px 15px;

  background: #e94e0f;
  color: #fff;
  border: none;
  border-radius: 5px;
`;
