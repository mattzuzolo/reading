import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
  width: 330px;
  border: solid #858585 0.5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
`;

type Props = {
  src: string;
};

const BookCover = ({ src }: Props): JSX.Element => {
  return <Image src={src} />;
};

export default BookCover;
