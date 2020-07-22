import React from 'react';
import Img from 'gatsby-image';
import {useStaticQuery, graphql} from 'gatsby';
function IntroPhotograph() {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: {eq: "placeholder.png"}) {
        childImageSharp {
          fluid(maxWidth: 900, maxHeight: 900, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return <Img fluid={data.file.childImageSharp.fluid} />;
}

export default IntroPhotograph;
