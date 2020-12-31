import React from 'react';

import { RiFilterFill } from 'react-icons/ri';
import {
  Container,
  Input,
  FilterContainer,
  FilterButtonWrap,
  FilterInput,
  FilterButton,
} from './styles';

const SearchBar: React.FC = () => {
  return (
    <Container>
      <Input placeholder="Pesquisar" type="text" name="searchText" />

      <FilterContainer>
        <FilterButtonWrap>
          <FilterInput type="checkbox" name="checkbox" />
          <FilterButton type="button"> ATRIBUIR </FilterButton>
          <FilterButton type="button"> ARQUIVAR </FilterButton>
          <FilterButton type="button"> AGENDAR </FilterButton>
        </FilterButtonWrap>
        <RiFilterFill />
      </FilterContainer>
    </Container>
  );
};

export default SearchBar;
