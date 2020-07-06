/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
import React from 'react';
import {graphql, useStaticQuery} from 'gatsby';
import {Global, css} from '@emotion/core';
import styled from '@emotion/styled';
import {ThemeProvider} from 'emotion-theming';
import Header from './header';
import Container from './container';
import theme from '../../config/theme';
function Layout() {
  return (
    <Container maxWidth="1120">
      <Header siteTitle="Center City Language & Play" />
    </Container>
  );
}

export default Layout;
