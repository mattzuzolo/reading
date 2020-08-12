import React from 'react';
import styled from 'styled-components';
import bookData from '../../_data/books';
import Book from '_types/Book';
import FeedItem from './FeedItem';

const Container = styled.div``;

const Feed = (): JSX.Element => {
  const booksToRender = bookData['2020'];
  return (
    <Container>
      {booksToRender.reverse().map(
        (book: Book): JSX.Element => {
          return (
            <FeedItem
              key={book.slug}
              author={book.author}
              title={book.title}
              shortTitle={book.shortTitle}
              imageSrc={book.imageSrc}
              favorite={book.favorite}
              reread={book.reread}
              note={book.note}
              stroopwafel={book.stroopwafel}
            />
          );
        },
      )}
    </Container>
  );
};

export default Feed;
