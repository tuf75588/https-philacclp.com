import React from 'react';
import {css} from '@emotion/core';
import {fonts} from '../lib/typography';

function Navigation() {
  return (
    <ul
      css={css`
        display: flex;
        width: 90%;
        font-family: ${fonts.light};
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
