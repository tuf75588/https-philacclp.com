import React from 'react';
import Img from 'gatsby-image';
import {useStaticQuery, graphql} from 'gatsby';
import {css} from '@emotion/core';
function IntroPhotograph() {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: {eq: "intro.jpg"}) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 400, maxHeight: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return <Img fluid={data.file.childImageSharp.fluid} />;
}

export default IntroPhotograph;
