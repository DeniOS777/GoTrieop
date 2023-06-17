import React from 'react';
import { NavList, Link } from './MainNav.styled';

export const MainNav = ({ footer }) => {
  return (
    <NavList>
      <li>
        <Link href="/" target="_blank" footer={footer}>
          Home
        </Link>
      </li>

      <li>
        <Link href="/" target="_blank" footer={footer}>
          Services
        </Link>
      </li>

      <li>
        <Link href="/" target="_blank" footer={footer}>
          Pricing
        </Link>
      </li>

      <li>
        <Link href="/" target="_blank" footer={footer}>
          Contact
        </Link>
      </li>
    </NavList>
  );
};
