import React from 'react';
import {css} from '@emotion/core';
import {fonts} from '../lib/typography';

function Navigation() {
  return (
    <ul
      css={css`
        display: flex;

        font-family: ${fonts.light};
        justify-content: center;

        li {
          list-style-type: none;
          margin: 1rem;
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
