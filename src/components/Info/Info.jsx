import React from 'react';
import { Container } from '../Container';
import { SectionInfo, Wrapper, TitleInfo, TextInfo, Link } from './Info.styled';

export const Info = () => {
  return (
    <SectionInfo>
      <Container>
        <Wrapper>
          <TitleInfo>Prepare Yourself And Start Exploring With Us.</TitleInfo>
          <TextInfo>There's the best discount for you today.</TextInfo>
          <Link
            href="https://www.google.com"
            target="_blank"
            rel="noopener noreferer"
          >
            Get Started
          </Link>
        </Wrapper>
      </Container>
    </SectionInfo>
  );
};
