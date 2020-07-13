import React from 'react';

import Layout from '../components/layout';
import Hero from '../components/hero';
import Introduction from '../components/home-intro';
import Services from '../components/services';
import Container from '../components/container';
import {css} from '@emotion/core';

// const Card = ({
//   backgroundColor = '#E75248',
//   title,
//   description,
//   link,
//   big = false,
// }) => (
//   <Link to={link} aria-label={`View ${title}`}>
//     hello there
//   </Link>
// );

const IndexPage = () => (
  <Layout>
    <Container
      css={css`
        position: relative;
        border-radius: 5px;
        padding: 40px 80px 60px 80px;
      `}
    >
      <h1>about page</h1>
    </Container>
  </Layout>
);

export default IndexPage;
