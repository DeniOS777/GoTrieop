import React from 'react';
import { Logo } from '../Logo';
import { MainNav } from '../MainNav';
import { AuthNav } from '../AuthNav';
import { HeaderNav } from './Navigation.styled';

export const Navigation = ({ footer }) => {
  return (
    <HeaderNav>
      <Logo footer={footer} />
      <MainNav footer={footer} />
      <AuthNav footer={footer} />
    </HeaderNav>
  );
};
