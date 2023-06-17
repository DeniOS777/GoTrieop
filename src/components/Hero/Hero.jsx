import React from 'react';
import { Container } from '../Container';
import {
  SectionHero,
  Link,
  TitleHero,
  TextHero,
  Button,
  Image,
} from './Hero.styled';

export const Hero = () => {
  return (
    <SectionHero>
      <Container>
        <Image>
          <div></div>
        </Image>
        <Link
          href="https://www.discovery.com/"
          target="_blank"
          rel="noopener noreferer"
        >
          Explore the world
        </Link>
        <TitleHero>Explore The Natural Beauty Of Halmahera With Us</TitleHero>
        <TextHero>
          explore the beauty of god's earth in a beautiful forest and have fun
        </TextHero>
        <Button type="button">Explore Now</Button>
      </Container>
    </SectionHero>
  );
};
