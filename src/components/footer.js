import React from 'react';
import {css} from '@emotion/core';
import theme from '../../config/theme';
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineFacebook,
} from 'react-icons/ai';
function Footer() {
  return (
    <footer
      css={css`
        background: ${theme.colors.purple_dark};
        color: white;
        text-align: center;
        font-size: 2rem;
      `}
    >
      <p>Connect with us</p>
      <div
        css={css`
          display: flex;
          justify-content: center;
          svg {
            height: 50px;
            width: 50px;
          }
        `}
      >
        <AiOutlineInstagram />
        <AiOutlineTwitter />
        <AiOutlineFacebook />
      </div>
    </footer>
  );
}
export default Footer;
