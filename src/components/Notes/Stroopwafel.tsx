import React from 'react';
import Note from './_common/Note';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons';

const Stroopwafel = (): JSX.Element => {
  return (
    <Note text="I read this while eating a stroopwafel">
      <FontAwesomeIcon icon={faStroopwafel} />
    </Note>
  );
};

export default Stroopwafel;
