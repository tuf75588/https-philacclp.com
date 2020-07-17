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
        @media (min-width: 300px) {
          li {
            margin: 0;
            padding: 5px;
          }
        }
      `}
    >
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/services">Services</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
      <li>
        <Link to="/faq">FAQ</Link>
      </li>
    </ul>
  );
}

/*
route each page to the appropriate view
*/

export default Navigation;
