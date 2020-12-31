import styled from 'styled-components';

interface IIconNameWrap {
  color: string;
}

export const ContainerIconNameWrap = styled.div<IIconNameWrap>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  height: 40px;
  width: 40px;

  border-radius: 50%;

  background: ${props => props.color};
  color: white;
`;
