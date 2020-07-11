import React from 'react';
import {css} from '@emotion/core';
import IntroPhotograph from './intro-photograph';
function Introduction() {
  const boxOneStyle = css`
    border: 1px solid black;
    margin: 1rem;
    width: 500px;
  `;

  const boxTwoStyle = css`
    margin: 1rem;
    width: 300px;
  `;
  return (
    <div
      css={css`
        display: flex;
        justify-content: center;
        align-items: flex-start;
        margin: 2rem auto 0 auto;
        height: 600px;
      `}
      className="introduction-section"
    >
      <div css={boxOneStyle}>
        <IntroPhotograph />
      </div>
      <div css={boxTwoStyle}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae
          lorem lectus. Morbi dignissim elit a lacus tincidunt auctor eu
          vehicula magna. Fusce finibus euismod eros, sed imperdiet enim
          ultrices eget. Aenean hendrerit sagittis lacus, ac ornare ipsum. Etiam
          vel risus magna. Nulla dictum mi ut quam ultrices congue. Sed eu elit
          dictum ex elementum dictum eu eget nunc. Nullam lacinia dui ante.
          Aenean vel feugiat est, at cursus libero. Aliquam a eleifend dolor,
          sed lobortis lacus. Vestibulum ante ipsum primis in faucibus orci
          luctus et ultrices posuere cubilia curae; Sed sed ultrices sem, eu
          bibendum felis. Proin condimentum tempus porta. Fusce a elementum leo.
        </p>
      </div>
    </div>
  );
}

export default Introduction;
