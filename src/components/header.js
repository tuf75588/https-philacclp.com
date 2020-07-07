import React from 'react';
import {css} from '@emotion/core';
function Header(props) {
  return (
    <div
      css={css`
        border: 1px solid black;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1.5em;
        .logo-brand {
          padding-left: 2em;
        }
      `}
    >
      {/* this component will serve as the "HERO" containing our logo
          and some meta contact information like social media and a contact
          email
      */}
      <div>
        <span>🐦</span> <span>📷</span>
      </div>

      <header className="logo-brand">
        <h1>CCLP</h1>
      </header>
      <div>email info | phone number</div>
    </div>
  );
}

export default Header;
