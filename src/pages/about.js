import React from 'react';

import Layout from '../components/layout';
import Container from '../components/container';
import {css} from '@emotion/core';

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
