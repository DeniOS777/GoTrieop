import styled from 'styled-components';

export const Form = styled.form`
  position: relative;
  display: flex;
  align-items: center;
  max-width: 800px;
`;

export const Button = styled.button`
  position: absolute;
  right: 16px;
  padding: 34px 86px;
  font-weight: 600;
  font-size: 25px;
  line-height: 1.52;
  color: #ffffff;
  background: linear-gradient(129.54deg, #ff7b4e 15.57%, #ff584e 95.03%),
    #ffffff;
  border-radius: 35px;
  border-style: none;
  cursor: pointer;
  transition: transform 300ms ease-in-out, box-shadow 300ms ease-in-out;

  &:hover,
  :focus {
    transform: scale(0.97);
    box-shadow: #000000 0px 2px 15px -2px, rgba(0, 0, 0, 0) 5px 5px 15px 5px;
  }
`;

export const Input = styled.input`
  padding-left: 46px;
  padding-right: 340px;
  height: 130px;
  width: 100%;
  font-weight: 600;
  font-size: 24px;
  line-height: 1.5;
  color: #0f1f1c;
  border-style: none;
  background: linear-gradient(0deg, #ffffff, #ffffff), #c4c4c4;
  border-radius: 35px;

  &::placeholder {
    font-weight: 500;
    font-size: 24px;
    line-height: 1.5;
    color: #0f1f1c;
    opacity: 0.5;
  }
`;
