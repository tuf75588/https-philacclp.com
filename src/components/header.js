import React from 'react';
import {css} from '@emotion/core';
import Img from 'gatsby-image';
import {useStaticQuery, graphql} from 'gatsby';
function Header() {
  const data = useStaticQuery(graphql`
    {
      file(
        childImageSharp: {id: {eq: "47149be2-0d1f-5dff-9a5e-00e7c6522289"}}
      ) {
        id
        childImageSharp {
          fixed(width: 200, height: 200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);
  console.log(data);
  return (
    <div
      css={css`
        padding: 0.5rem 2rem 0 0;
        justify-content: space-around;
        margin: 0 auto;
      `}
    >
      <Img fixed={data.file.childImageSharp.fixed} />
    </div>
  );
}

export default Header;
