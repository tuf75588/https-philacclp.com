/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
import React from 'react';
import {Helmet} from 'react-helmet';
import {Global, css} from '@emotion/core';
import {ThemeProvider} from 'emotion-theming';
import Header from './header';
import {MDXProvider} from '@mdx-js/react';
import theme from '../../config/theme';
import Navigation from './nav';
import {bpMaxSM} from '../lib/breakpoints';
import {fonts} from '../lib/typography';
import reset from '../lib/reset';
import mdxComponents from '../components/mdx';
import Footer from './footer';

// global styles for whole app
export const globalStyles = css`
  :root {
    --clr-dark: rgb(13, 17, 19);
    --clr-light: #fff;
    --clr-accent: rgb(222, 52, 0);
    --clr-accent-dark: rgb(163, 38, 0);
    --clr-secondary: rgb(0, 62, 163);
  }
  .button-secondary {
    border-radius: 4px;
    padding: 12px 12px;
    background: ${theme.colors.primary_light};
  }
  ${bpMaxSM} {
    h1 {
      font-size: 30px;
    }
    h2 {
      font-size: 24px;
    }
  }
  hr {
    margin: 50px 0;
    border: none;
    border-top: 1px solid ${theme.colors.grey};
    background: none;
  }
  em {
    font-family: ${fonts.regularItalic};
  }
  b,
  strong {
    font-family: ${fonts.semiBold};
    em {
      font-family: ${fonts.semiBoldItalic};
    }
  }
  input,
  textarea {
    border-radius: 4px;
    border: 1px solid ${theme.colors.grey};
    padding: 5px 10px;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);
    font-family: ${fonts.regular};
    ::placeholder {
      opacity: 0.4;
    }
  }
  .gatsby-resp-image-image {
    background: none !important;
    box-shadow: 0;
  }
  button {
    border-radius: 4px;
    background-color: ${theme.colors.green};
    border: none;
    color: ${theme.colors.white};
    padding: 8px 15px;
    cursor: pointer;
    border: 1px solid ${theme.colors.green};
    transition: ${theme.transition.ease};
    :hover:not(:disabled) {
      background: ${theme.colors.link_color_hover};
      border: 1px solid ${theme.colors.link_color_hover};
      transition: ${theme.transition.ease};
    }
    :disabled {
      opacity: 0.6;
      cursor: auto;
    }
  }

  code {
    padding: 2px 4px;
    background: #f4f3fa;
    color: ${theme.colors.body_color};
    border-radius: 3px;
  }
  a {
    code {
      color: ${theme.brand.primary};
    }
  }
  pre {
    background-color: #061526;
    border-radius: 4px;
    font-size: 16px;
    padding: 10px;
    overflow-x: auto;
    ::-webkit-scrollbar {
      width: 100%;
      height: 5px;
      border-radius: 0 0 5px 5px;
    }
    ::-webkit-scrollbar-track {
      background: #061526;
      border-radius: 0 0 4px 4px;
      border: 1px solid rgba(0, 0, 0, 0.2);
    }
    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: #888;
      border-radius: 5px;
    }
  }
  .highlight-line {
    background-color: rgba(201, 167, 255, 0.2);
    margin: 0 -10px;
    padding: 0 5px;
    border-left: 5px solid #c9a7ff;
  }
  h1 .anchor svg,
  h2 .anchor svg,
  h3 .anchor svg,
  h4 .anchor svg,
  h5 .anchor svg,
  h6 .anchor svg {
    position: absolute;
    left: -24px;
    height: 100%; /* vertically center */
    width: 20px;
    transition: all 0.2s;
    opacity: 0;
  }
  h1:hover .anchor svg,
  h2:hover .anchor svg,
  h3:hover .anchor svg,
  h4:hover .anchor svg,
  h5:hover .anchor svg,
  h6:hover .anchor svg {
    opacity: 1;
  }
  ${reset};
`;

function Layout({children, maxWidth = 720}) {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />
      <Helmet
        title={`Homepage for Center City Language & Play`}
        meta={[{name: 'description', content: 'homepage!'}]}
      >
        <html lang="en" />
      </Helmet>
      <div
        css={css`
          display: flex;
          flex-direction: column;
          width: 100%;
          min-height: 100vh;
        `}
      >
        {/* <Header />
         */}
        <div css={{flex: '1 0 auto'}}>
          <Header />
          <Navigation />
          <MDXProvider components={mdxComponents}>{children}</MDXProvider>
        </div>
        <Footer maxWidth={maxWidth} />
      </div>
    </ThemeProvider>
  );
}

export default Layout;
