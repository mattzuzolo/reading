import React, { ReactNode } from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    /* TODO: remove this import to remove react warning */
    @import url("https://fonts.googleapis.com/css2?family=Hind:wght@300;400;600&display=swap");
    font-family: 'Hind', sans-serif;
  }
  html {
    border: #ff4400 solid 15px;
  }
  body {
    background-color: #f7efdc;
    /* background-color: cyan; */
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }

  a:hover {
    text-decoration: underline;
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
