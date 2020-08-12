import React, { ReactNode } from 'react';
import styled from 'styled-components';
import Tippy from '@tippyjs/react';
// import 'node_modules/tippy.js/dist/tippy.css';

const Wrapper = styled.div`
  margin-bottom: 25px;
`;

const Span = styled.span`
  font-size: 36px;
  color: #ff4400;
`;

type Props = {
  children: ReactNode;
  text: string;
};

const Favorite = ({ children, text }: Props): JSX.Element => {
  return (
    <Wrapper onClick={() => console.log('YOU CLICKE THE TOOLTIP!')}>
      <Tippy
        placement="left"
        content={text}
        interactive={true}
        interactiveBorder={20}
        // delay={50}
        // interactiveDebounce={20}
        animation="shift-away"
        maxWidth={115}
        // ...and many more!
      >
        <Span>{children}</Span>
      </Tippy>
    </Wrapper>
  );
};

export default Favorite;
