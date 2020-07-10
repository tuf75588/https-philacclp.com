import React from 'react';
import {css} from '@emotion/core';
import {useStaticQuery, graphql} from 'gatsby';
import Img from 'gatsby-image';
function Hero() {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: {eq: "hero.jpg"}) {
        childImageSharp {
          # Specify a fluid image and fragment
          # The default maxWidth is 800 pixels
          fluid(maxWidth: 900, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <div
      css={css`
        max-width: 900px;
        margin: 0 auto;
      `}
    >
      <Img
        fluid={data.file.childImageSharp.fluid}
        css={css`
          border-radius: 10px;
        `}
      />
    </div>
  );
}

export default Hero;
