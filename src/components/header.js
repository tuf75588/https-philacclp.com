import React from 'react';
import {css} from '@emotion/core';
import cclp from '../images/cclp.png';
function Header() {
  return (
    <div
      css={css`
        display: flex;
        align-items: center;
        background-image: linear-gradient(
          to top,
          #fdcbf1 0%,
          #fdcbf1 1%,
          #e6dee9 100%
        );
        position: relative;
        justify-content: space-between;
        padding: 0.5em;
        .logo-brand {
          padding-left: 3em;
          margin-left: 3em;
          height: 200px;
        }
      `}
    >
      {/* this component will serve as the "HERO" containing our logo
          and some meta contact information like social media and a contact
          email
      */}
      {/* for border styling */}
      <div>
        <span>🐦</span> <span>📷</span>
      </div>

      <header className="logo-brand">
        <img
          src={cclp}
          css={css`
            display: block;
            max-height: 100%;
            max-width: 100%;
            border-radius: 3px;
          `}
        />
      </header>
      <div>email info | phone number</div>
    </div>
  );
}

export default Header;
