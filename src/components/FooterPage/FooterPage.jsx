import React from 'react';
import { Container } from '../Container';
import { Navigation } from '../Navigation';
import { Footer } from './FooterPage.styled';

export const FooterPage = ({ footer }) => {
  return (
    <Footer>
      <Container>
        <Navigation footer={footer} />
      </Container>
    </Footer>
  );
};
