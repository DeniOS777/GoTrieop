import React from 'react';
import { AuthNavList, LoginLink, SigninLink } from './AuthNav.styled';

export const AuthNav = ({ footer }) => {
  return (
    <AuthNavList>
      <li>
        <SigninLink href="/" target="_blank" footer={footer}>
          Sign up
        </SigninLink>
      </li>

      <li>
        <LoginLink href="/" target="_blank">
          Login
        </LoginLink>
      </li>
    </AuthNavList>
  );
};
