import React from 'react';
import Note from './_common/Note';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// TODO: figure out better way to use fontawesome. This was (maybe?) is less efficent
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Favorite = (): JSX.Element => {
  return (
    <Note text="I particularly enjoyed this book">
      <FontAwesomeIcon icon={faStar} />
    </Note>
  );
};

export default Favorite;
