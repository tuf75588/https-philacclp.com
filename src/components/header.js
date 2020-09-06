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
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
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
          opacity: 0.7;
          margin-bottom: 0.5rem;
          margin-left: auto;
          margin-right: auto;
          max-width: 500px;
          max-height: 300px;
        `}
      >
        <Img
          fluid={data.file.childImageSharp.fluid}
          css={css`
            border-radius: 10px;
            width: 100%;
            -webkit-box-shadow: 0 10px 6px -6px #777;
            -moz-box-shadow: 0 10px 6px -6px #777;
            box-shadow: 0 10px 6px -6px #777;
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
