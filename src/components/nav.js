import React from 'react';
import {css} from '@emotion/core';
function Navigation() {
  return (
    <ul
      css={css`
        display: flex;

        width: 90%;
        padding-right: 20px;
        justify-content: center;
        margin: 10px auto;

        li {
          list-style-type: none;
          padding-right: 30px;
        }
      `}
    >
      <li>Home</li>
      <li>About</li>
      <li>Services</li>
      <li>Contact</li>
      <li>FAQ</li>
    </ul>
  );
}
export default Navigation;
