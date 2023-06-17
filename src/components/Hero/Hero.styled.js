import styled from 'styled-components';
import image from '../../images/bg_image.png';
import wave from '../../images/wave.png';
import circle_1 from '../../images/sircle_group-3.png';
import circle_2 from '../../images/sircle_group-4.png';

export const SectionHero = styled.section`
  position: relative;
  padding-top: 150px;
  padding-bottom: 165px;
  background: linear-gradient(132.05deg, #428e5f -17.38%, #112120 78.4%);
  border-top-left-radius: 74px;
  border-top-right-radius: 74px;

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    display: block;
    width: 0;
    height: 0;
    border: 0 solid transparent;
    border-right-width: 50vw;
    border-left-width: 0px;
    border-bottom: 125px solid #e5e5e5;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    display: block;
    width: 0;
    height: 0;
    border: 0 solid transparent;
    border-right-width: 50vw;
    border-left-width: 0px;
    border-bottom: 125px solid #e5e5e5;
    transform: rotateY(180deg);
  }
`;

export const Link = styled.a`
  display: inline-block;
  margin-bottom: 7px;
  padding: 12px 30px;
  color: #ffffff;
  background: rgba(255, 255, 255, 0.25);
  border-radius: 15px;
  border-style: none;
  transition: background 250ms ease-in-out;

  &:hover,
  :focus {
    background: rgba(255, 255, 255, 0.4);
  }
`;

export const TitleHero = styled.h1`
  width: 603px;
  margin-bottom: 30px;
  font-weight: 600;
  font-size: 55px;
  line-height: 1.49;
  color: #ffffff;
`;

export const TextHero = styled.p`
  width: 520px;
  margin-bottom: 68px;
  font-weight: 500;
  font-size: 25px;
  line-height: 1.52;
  color: #ffffff;
  opacity: 0.5;
`;

export const Button = styled.button`
  padding: 26px 48px;
  background: linear-gradient(129.54deg, #ff7b4e 15.57%, #ff584e 95.03%);
  border-radius: 27px;
  border-style: none;
  color: #ffffff;
  font-weight: 600;
  font-size: 25px;
  line-height: 1.52;
  cursor: pointer;
  transition: transform 300ms ease-in-out, box-shadow 300ms ease-in-out;

  &:hover,
  :focus {
    transform: scale(0.97);
    box-shadow: #ffffff 0px 0px 25px -1px, rgba(0, 0, 0, 0) 5px 5px 15px 5px;
  }
`;

export const Image = styled.div`
  position: absolute;
  top: 115px;
  right: 125px;
  display: block;
  width: 642px;
  height: 788px;
  background-image: url(${image});
  background-repeat: no-repeat;
  background-size: contain;

  &::before {
    content: '';
    position: absolute;
    top: 82px;
    right: -47px;
    display: inline-block;
    width: 160px;
    height: 48px;
    background-image: url(${wave});
    background-size: cover;
    background-repeat: no-repeat;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 106px;
    left: 120px;
    display: inline-block;
    width: 160px;
    height: 48px;
    background-image: url(${wave});
    background-size: cover;
    background-repeat: no-repeat;
  }

  & div::before {
    content: '';
    position: absolute;
    top: 28px;
    left: 104px;
    display: inline-block;
    width: 48px;
    height: 63px;
    background-image: url(${circle_1});
    background-size: contain;
    background-repeat: no-repeat;
  }

  & div::after {
    content: '';
    position: absolute;
    bottom: 178px;
    right: -84px;
    display: inline-block;
    width: 63px;
    height: 83px;
    background-image: url(${circle_2});
    background-size: contain;
    background-repeat: no-repeat;
  }
`;
