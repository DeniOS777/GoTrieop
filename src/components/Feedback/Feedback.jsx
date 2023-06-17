import React from 'react';
import { Container } from '../Container';
import { StarRating } from '../StarRating';
import {
  FeedbackSection,
  WrapImage,
  TitleFeedback,
  WrapUserInfo,
  WrapAvatar,
  UserName,
  Location,
  Description,
} from './Feedback.styled';
import image from '../../images/feedback_image.png';
import avatar from '../../images/feedback_avatar.png';

export const Feedback = () => {
  return (
    <FeedbackSection>
      <Container>
        <div style={{ display: 'flex' }}>
          <WrapImage>
            <img src={image} alt="nature" width="478" height="537" />
          </WrapImage>
          <div>
            <TitleFeedback>What do customers say about us?</TitleFeedback>
            <WrapUserInfo>
              <WrapAvatar>
                <img src={avatar} alt="user" width="134" height="134" />
              </WrapAvatar>
              <div>
                <UserName>Alpanasap</UserName>
                <Location>Japung, Indonesia</Location>
              </div>
            </WrapUserInfo>
            <Description>
              Very satisfying service makes it comfortable, a beautiful place in
              the world.
            </Description>

            <StarRating rating={3} />
          </div>
        </div>
      </Container>
    </FeedbackSection>
  );
};
