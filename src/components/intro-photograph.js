import React from 'react';
import Img from 'gatsby-image';
import {useStaticQuery, graphql} from 'gatsby';
function IntroPhotograph() {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: {eq: "intro.jpg"}) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return <Img fluid={data.file.childImageSharp.fluid} />;
}

export default IntroPhotograph;
