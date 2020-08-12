import React from 'react';
import Note from './_common/Note';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRedoAlt } from '@fortawesome/free-solid-svg-icons';

const Reread = (): JSX.Element => {
  return (
    <Note text="This was a reread">
      <FontAwesomeIcon icon={faRedoAlt} />
    </Note>
  );
};

export default Reread;
