import styled from 'styled-components';

export const FeedbackSection = styled.section`
  padding-top: 100px;
  padding-bottom: 100px;
  background-color: #e5e5e5;
`;

export const WrapImage = styled.div`
  margin-right: 68px;
  border-radius: 60px;
  overflow: hidden;

  & img {
    transition: transform 400ms ease-in-out;
  }

  & img:hover {
    transform: scale(1.1);
  }
`;

export const TitleFeedback = styled.h3`
  margin-bottom: 35px;
  width: 565px;
  font-weight: 500;
  font-size: 45px;
  line-height: 1.51;
  color: #0f1f1c;
`;

export const WrapUserInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 60px;
`;

export const WrapAvatar = styled.div`
  margin-right: 32px;
  background-color: #ffaa99;
  border-radius: 50%;
  overflow: hidden;
`;

export const UserName = styled.p`
  margin-bottom: 8px;
  font-weight: 500;
  font-size: 33px;
  line-height: 1.51;
  color: #0f1f1c;
`;

export const Location = styled.p`
  font-size: 25px;
  line-height: 1.52;
  color: #0f1f1c;
  opacity: 0.5;
`;

export const Description = styled.p`
  margin-bottom: 30px;
  width: 490px;
  font-weight: 500;
  font-size: 22px;
  line-height: 1.5;
  color: #0f1f1c;
  opacity: 0.5;
`;
