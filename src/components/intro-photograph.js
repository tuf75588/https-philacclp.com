import React from 'react';
import Img from 'gatsby-image';
import {useStaticQuery, graphql} from 'gatsby';
function IntroPhotograph() {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: {eq: "intro.jpg"}) {
        childImageSharp {
          fixed(width: 400, height: 500) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return <Img fixed={data.file.childImageSharp.fixed} />;
}

export default IntroPhotograph;
