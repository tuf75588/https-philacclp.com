import React from 'react';
import {css} from '@emotion/core';
import {useStaticQuery, graphql} from 'gatsby';
import Img from 'gatsby-image';
function Hero() {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: {eq: "newHero.png"}) {
        childImageSharp {
          # Specify a fluid image and fragment
          # The default maxWidth is 800 pixels
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <div
      css={css`
        margin: 2rem auto 2rem auto;
        max-width: 1000px;
        max-height: 1000px;
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
