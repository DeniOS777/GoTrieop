import React from 'react';
import { Container } from '../Container';
import { Slider } from '../Slider';
import {
  SectionChoice,
  Wrapper,
  WrapLeft,
  TitleChoice,
  TextChoice,
  Button,
} from './Choice.styled';

export const Choice = () => {
  return (
    <SectionChoice>
      <Container>
        <Wrapper>
          <WrapLeft>
            <TitleChoice>
              Choice of <span>Destinations</span>
            </TitleChoice>
            <TextChoice>
              explore the beauty of god's earth in a beautiful forest and have
              fun
            </TextChoice>
            <Button>Explore Now</Button>
          </WrapLeft>
          <Slider />
        </Wrapper>
      </Container>
    </SectionChoice>
  );
};
