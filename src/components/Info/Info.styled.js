import styled from 'styled-components';
import sircleRight from '../../images/sircle_group-1.png';
import sircleLeft from '../../images/sircle_group-1.png';

export const SectionInfo = styled.section`
  padding-top: 100px;
  padding-bottom: 80px;
  background-color: #e5e5e5;
`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 116px;
  padding-bottom: 116px;
  background-color: #ffffff;
  border-radius: 60px;

  &::before {
    content: '';
    position: absolute;
    top: 74px;
    right: 80px;
    display: block;
    width: 63px;
    height: 83px;
    background-image: url(${sircleRight});
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 56px;
    left: 74px;
    display: block;
    width: 63px;
    height: 83px;
    background-image: url(${sircleLeft});
  }
`;

export const TitleInfo = styled.h3`
  margin-bottom: 30px;
  width: 520px;
  font-weight: 500;
  font-size: 45px;
  line-height: 1.51;
  text-align: center;
  color: #0f1f1c;
`;

export const TextInfo = styled.p`
  margin-bottom: 60px;
  font-size: 30px;
  line-height: 1.5;
  color: #0f1f1c;
  opacity: 0.5;
`;

export const Link = styled.a`
  display: inline-flex;
  padding: 24px 54px;
  font-weight: 600;
  font-size: 20px;
  line-height: 1.5;
  color: #ffffff;
  background: linear-gradient(129.54deg, #ff7b4e 15.57%, #ff584e 95.03%);
  border-radius: 27px;
  transition: transform 300ms ease-in-out, box-shadow 300ms ease-in-out;

  &:hover,
  :focus {
    transform: scale(0.97);
    box-shadow: #000000 0px 2px 30px -2px, rgba(0, 0, 0, 0) 5px 5px 15px 5px;
  }
`;
