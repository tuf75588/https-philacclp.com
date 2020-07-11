import React from 'react';

import Layout from '../components/layout';
import Hero from '../components/hero';
import Introduction from '../components/home-intro';
const IndexPage = () => (
  <Layout>
    <Hero />
    <section>
      <Introduction />
    </section>
  </Layout>
);

export default IndexPage;
