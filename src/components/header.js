import React from 'react';
import {css} from '@emotion/core';
import Img from 'gatsby-image';
import {useStaticQuery, graphql} from 'gatsby';
function Header() {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: {eq: "pink.png"}) {
        id
        childImageSharp {
          fixed(width: 700, height: 400) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <React.Fragment>
      <div
        css={css`
          padding-top: 0.5rem;
          padding-right: 1rem;
          padding-left: 1rem;
          display: flex;
          justify-content: center;
          background: purple;
          opacity: 0.7;
          margin-bottom: 0.5rem;
          margin-left: auto;
          margin-right: auto;
        `}
      >
        <Img
          fixed={data.file.childImageSharp.fixed}
          css={css`
            border-radius: 10px;
          `}
        />
      </div>
      <hr
        css={css`
          width: 50%;
          margin: 0 auto;
          opacity: 0.1;
        `}
      />
    </React.Fragment>
  );
}

export default Header;
