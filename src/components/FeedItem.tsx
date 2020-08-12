import React from 'react';
import styled from 'styled-components';
import BookCover from './BookCover';
import Book from '_types/Book';

import Favorite from './Notes/Favorite';
import Reread from './Notes/Reread';
import Stroopwafel from './Notes/Stroopwafel';

const Container = styled.div`
  display: flex;
  margin-bottom: 54px;
`;

const Title = styled.h2`
  margin: 0;
  padding: 0;
  color: #1f0404;
  font-size: 46px;
  margin-bottom: 2px;
`;

const Author = styled.h4`
  margin: 0;
  padding: 0;
  font-size: 38px;
  color: #4c4949;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 52px;
  padding-top: 42px;
`;

const Notes = styled.span`
  display: flex;
  flex-direction: column;
  margin-right: 8px;
  min-width: 48px;
`;

const LeftWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  /* align-items: flex; */
`;

const Review = styled.p`
  color: #1f0404;
  font-size: 24px;
`;

const FeedItem = ({
  title,
  author,
  imageSrc,
  favorite,
  reread,
  shortTitle,
  note,
  stroopwafel,
}: Book | any): JSX.Element => {
  return (
    <Container key={title}>
      <LeftWrapper>
        <Notes>
          {favorite && <Favorite />}
          {reread && <Reread />}
          {stroopwafel && <Stroopwafel />}
        </Notes>
        <BookCover src={imageSrc} />
      </LeftWrapper>
      <TextWrapper>
        <Title>{shortTitle ? shortTitle : title}</Title>
        <Author>{author}</Author>
        <Review>{note}</Review>
      </TextWrapper>
    </Container>
  );
};

export default FeedItem;
