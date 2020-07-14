import React from 'react';
import {css} from '@emotion/core';
import Img from 'gatsby-image';
import {useStaticQuery, graphql} from 'gatsby';
function Header() {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: {eq: "cclp.png"}) {
        id
        childImageSharp {
          fixed(width: 200, height: 200) {
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

          margin-bottom: 0.5rem;
          margin-left: auto;
          margin-right: auto;
        `}
      >
        <Img fixed={data.file.childImageSharp.fixed} />
      </div>
      <p
        css={css`
          text-align: center;
          font-family: 'Dancing Script', cursive;
          font-size: 30px;
          margin-bottom: 25px;
        `}
      >
        Creating a limitless future through language and play
      </p>
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
