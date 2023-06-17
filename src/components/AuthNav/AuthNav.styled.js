import styled from 'styled-components';

export const AuthNavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 25px;
`;

export const LoginLink = styled.a`
  display: block;
  padding-left: 44px;
  padding-right: 44px;
  padding-top: 12px;
  padding-bottom: 12px;
  font-weight: 500;
  font-size: 15px;
  line-height: 1.47;
  color: #ffffff;
  background: linear-gradient(129.54deg, #ff7b4e 15.57%, #ff584e 95.03%),
    #ffffff;
  border-radius: 100px;
  transition: transform 250ms ease-in-out, background 250ms ease-in-out;

  &:hover,
  :focus {
    transform: scale(0.97);
    background: linear-gradient(
        129.54deg,
        rgb(255, 123, 78) 50.57%,
        rgb(255, 88, 78) 32.03%
      ),
      rgb(255, 255, 255);
  }
`;

export const SigninLink = styled.a`
  font-weight: 500;
  font-size: 15px;
  line-height: 1.47;
  color: ${p => (p.footer ? '#808080' : '#ffffff')};
  transition: color 250ms ease-in-out;

  &:hover,
  :focus {
    color: ${p => (p.footer ? '#595959' : '#c3c2c2')};
  }
`;
