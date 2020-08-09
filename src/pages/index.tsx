import React from 'react';
import styled from 'styled-components';
import Layout from '../components/_common/Layout';

const title = styled.h1`
  color: #272343;
`;

export default function Home(): JSX.Element {
  return (
    <Layout>
      <div>
        <h1>{'Welcome 👋'}</h1>
      </div>
    </Layout>
  );
}
