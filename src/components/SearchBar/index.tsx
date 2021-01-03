import React from 'react';

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
  const {
    selectedSubtaskId,
    selectedTasksId,
    handleDeletingSelectedTasks,
    handleSelectAll,
    totalTasks,
  } = useTasks();

  return (
    <Container>
      <Input placeholder="Pesquisar" type="text" name="searchText" />

      <FilterContainer>
        <FilterButtonWrap>
          <FilterInput
            type="checkbox"
            name="checkbox"
            checked={
              totalTasks === 0 ? false : totalTasks === selectedTasksId.length
            }
            onChange={() => handleSelectAll()}
          />
          <FilterButton type="button"> ATRIBUIR </FilterButton>
          <FilterButton
            type="button"
            onClick={() =>
              handleDeletingSelectedTasks(selectedSubtaskId, selectedTasksId)
            }
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
