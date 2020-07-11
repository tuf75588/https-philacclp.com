import React from 'react';

import Layout from '../components/layout';
import Hero from '../components/hero';
import Introduction from '../components/home-intro';
import Services from '../components/services';
const IndexPage = () => (
  <Layout>
    <Hero />
    <section>
      <Introduction />
    </section>

    <Services />
  </Layout>
);

export default IndexPage;
