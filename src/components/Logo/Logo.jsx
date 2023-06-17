import React from 'react';
import { ReactComponent as Image } from '../../images/Logo.svg';
import { LinkLogo } from './Logo.styled';

export const Logo = ({ footer }) => {
  return (
    <LinkLogo href="/" target="_blank">
      {footer ? <Image fill="#FF7C4E" /> : <Image fill="#ffffff" />}
    </LinkLogo>
  );
};
