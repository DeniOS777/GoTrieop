import React from 'react';
import { ReactComponent as Star } from '../../images/rating_star.svg';
import { ReactComponent as StarColor } from '../../images/rating_star_color.svg';
import { Container, Wrapper, WrapperColor } from './StarRating.styled';

export const StarRating = ({ rating }) => {
  return (
    <Container>
      <Wrapper>
        <Star />
        <Star />
        <Star />
        <Star />
        <Star />
      </Wrapper>

      <WrapperColor rating={rating}>
        <StarColor />
        <StarColor />
        <StarColor />
        <StarColor />
        <StarColor />
      </WrapperColor>
    </Container>
  );
};
