import React from 'react';
import {css} from '@emotion/core';
import Img from 'gatsby-image';
import {useStaticQuery, graphql} from 'gatsby';
function IntroPhotograph() {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: {eq: "placeholder.png"}) {
        childImageSharp {
          fluid(maxWidth: 500, maxHeight: 500, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <div>
      <Img fluid={data.file.childImageSharp.fluid} />
    </div>
  );
}

export default IntroPhotograph;
