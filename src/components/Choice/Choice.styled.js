import styled from 'styled-components';

export const SectionChoice = styled.section`
  padding-top: 100px;
  padding-bottom: 100px;
  background: #e5e5e5;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const WrapLeft = styled.div`
  margin-right: 8px;
`;

export const TitleChoice = styled.h2`
  margin-bottom: 16px;
  font-weight: 600;
  font-size: 30px;
  line-height: 1.5;
  color: #0f1f1c;
  width: 352px;

  & > span {
    font-weight: 600;
    font-size: 55px;
    line-height: 1.49;
    color: #0f1f1c;
  }
`;

export const TextChoice = styled.p`
  margin-bottom: 60px;
  width: 456px;
  font-weight: 500;
  font-size: 25px;
  line-height: 1.52;
  color: #0f1f1c;
  opacity: 0.5;
`;

export const Button = styled.button`
  padding: 22px 44px;
  font-weight: 600;
  font-size: 20px;
  line-height: 1.5;
  color: #fefefe;
  background: linear-gradient(129.54deg, #ff7b4e 15.57%, #ff584e 95.03%);
  border-radius: 27px;
  border-style: none;
  cursor: pointer;
  transition: transform 300ms ease-in-out, box-shadow 300ms ease-in-out;

  &:hover,
  :focus {
    transform: scale(0.97);
    box-shadow: #000000 0px 2px 30px -2px, rgba(0, 0, 0, 0) 5px 5px 15px 5px;
  }
`;
