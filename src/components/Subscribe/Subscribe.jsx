import React from 'react';
import { SubscribeForm } from '../SubscribeForm';
import { SubscribeSection, Wrapper, Title } from './Subscribe.styled';

export const Subscribe = () => {
  return (
    <SubscribeSection>
      <Wrapper>
        <Title>Subscribe To Our Newsletter</Title>
        <SubscribeForm />
      </Wrapper>
    </SubscribeSection>
  );
};
