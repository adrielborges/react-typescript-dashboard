import React, { memo } from 'react';
import { ContainerIconNameWrap } from './styles';

interface IIconNameWrapProps {
  owner: string;
}

const IconNameWrap: React.FC<IIconNameWrapProps> = ({ owner }) => {
  const getRandomColor = (): string => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <ContainerIconNameWrap color={getRandomColor()}>
      {owner}
    </ContainerIconNameWrap>
  );
};

export default memo(IconNameWrap);
