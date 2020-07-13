import React from 'react';
import {css} from '@emotion/core';
import {fonts} from '../lib/typography';
import Link from './link';
function Navigation() {
  return (
    <ul
      css={css`
        display: flex;

        font-family: ${fonts.light};
        justify-content: center;

        li {
          list-style-type: none;
          padding: 0.5rem;
        }
        li:hover {
          text-decoration: underline;
          cursor: pointer;
        }
      `}
    >
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>Services</li>
      <li>Contact</li>
      <li>FAQ</li>
    </ul>
  );
}
export default Navigation;
