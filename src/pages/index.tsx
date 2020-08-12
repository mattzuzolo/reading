import React from 'react';
import styled from 'styled-components';

import Layout from '../components/Layout';
import Feed from '../components/Feed';
import bookData from '../../_data/books';

const Wrapper = styled.div`
  margin-top: 10vh;
  margin-left: 12vh;
  margin-right: 25rem;
`;

const Title = styled.h1`
  /* color: #f6511d; */
  /* color: #ff5349; */
  /* color: #ff3300; */
  /* color: #ff4d00; */
  color: #ff4400;
  font-size: 72px;
  margin: 0;
`;

const Header = styled.div`
  margin-bottom: 36px;
`;

const YearWrapper = styled.span`
  font-weight: 300;
  font-size: 36px;
  white-space: nowrap;
`;

const Year = styled.a`
  margin-right: 16px;
  color: #9c9c9c;
`;

const BackButton = styled.a`
  color: #9c9c9c;
  font-size: 18px;
`;

export default function Home(): JSX.Element {
  const years = Object.keys(bookData);
  return (
    <Layout>
      <BackButton>Back</BackButton>
      <Wrapper>
        <Header>
          <Title>What I've been reading</Title>
          <YearWrapper>
            {years.map((year) => (
              <Year key={year} href="#">
                {year}
              </Year>
            ))}
          </YearWrapper>
        </Header>
        <Feed />
      </Wrapper>
    </Layout>
  );
}
