import styled from 'styled-components';

export const NavList = styled.ul`
  display: flex;
  gap: 80px;
  margin-right: auto;
`;

export const Link = styled.a`
  position: relative;
  font-weight: 500;
  font-size: 15px;
  line-height: 1.47;
  color: ${p => (p.footer ? '#808080' : '#ffffff')};
  transition: color 250ms ease-in-out;

  &::after {
    content: '';
    position: absolute;
    display: block;
    width: 100%;
    height: 4px;
    background: ${p => (p.footer ? '#808080' : '#ffffff')};
    border-radius: 50px;
    opacity: 0;
    transition: opacity 250ms ease-in-out;
  }

  &:hover,
  :focus {
    color: ${p => (p.footer ? '#595959' : '#c3c2c2')};
  }

  &:hover::after {
    opacity: 1;
  }
`;
