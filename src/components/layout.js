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

function GlobalStyles() {
  return (
    <Global
      styles={css`
        *,
        ::after,
        ::before {
          padding: 0;
          margin: 0;
        }
        p,
        h1 {
          margin: 0;
          padding: 0;
        }
      `}
    />
  );
}

function Layout() {
  return (
    <div>
      <GlobalStyles />
      <Header />i don't want to specify a max width with the header because I
      want it to be independant from the rest of the layout, ya feel me?
    </div>
  );
}

export default Layout;
