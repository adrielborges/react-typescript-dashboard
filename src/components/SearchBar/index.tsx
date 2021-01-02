import React, { useEffect, useState } from 'react';

import { RiFilterFill } from 'react-icons/ri';
import { useTasks } from '../../hooks/Tasks';
import {
  Container,
  Input,
  FilterContainer,
  FilterButtonWrap,
  FilterInput,
  FilterButton,
} from './styles';

const SearchBar: React.FC = () => {
  const { stateFilteredTasks, handleDeleteSelectedTask } = useTasks();

  const [id, setId] = useState(0);

  useEffect(() => {
    stateFilteredTasks.forEach(task => setId(task.id));
    console.log('effect:', id);
  }, [stateFilteredTasks]);

  return (
    <Container>
      <Input placeholder="Pesquisar" type="text" name="searchText" />

      <FilterContainer>
        <FilterButtonWrap>
          <FilterInput type="checkbox" name="checkbox" />
          <FilterButton type="button"> ATRIBUIR </FilterButton>
          <FilterButton
            type="button"
            onClick={() => handleDeleteSelectedTask(id, ['1', '2'])}
          >
            ARQUIVAR
          </FilterButton>
          <FilterButton type="button"> AGENDAR </FilterButton>
        </FilterButtonWrap>
        <RiFilterFill />
      </FilterContainer>
    </Container>
  );
};

export default SearchBar;
