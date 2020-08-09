import React, { ReactNode } from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #e3f6f5;
  }
`;

type Props = {
  children: ReactNode;
};
export default function Layout({ children }: Props): JSX.Element {
  return (
    <React.Fragment>
      <GlobalStyle />
      {children}
    </React.Fragment>
  );
}
