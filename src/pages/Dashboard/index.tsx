import React from 'react';

import Nav from '../../components/NavBar';
import SearchBar from '../../components/SearchBar';
import UserBar from '../../components/UserBar/index';

import { Container, WrapSideContent, WrapContent } from './styles';
import SideMenu from '../../components/SideMenu/index';
import ItemsSection from '../../components/ItemsSection/index';

const Dashboard: React.FC = () => {
  return (
    <>
      <Nav />
      <Container>
        <WrapSideContent>
          <UserBar />
          <SideMenu />
        </WrapSideContent>

        <WrapContent>
          <SearchBar />
          <ItemsSection />
        </WrapContent>
      </Container>
    </>
  );
};

export default Dashboard;
