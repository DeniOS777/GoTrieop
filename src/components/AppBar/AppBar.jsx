import React from 'react';
import { Container } from '../Container';
import { Navigation } from '../Navigation';
import { Header } from './AppBar.styled';

export const AppBar = () => {
  return (
    <Header>
      <Container>
        <Navigation />
      </Container>
    </Header>
  );
};
