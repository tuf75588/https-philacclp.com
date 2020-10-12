import React from 'react';
import {css} from '@emotion/core';
import theme from '../../config/theme';
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineFacebook,
} from 'react-icons/ai';
import {OutboundLink} from 'gatsby-plugin-google-analytics';
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
        <OutboundLink href="https://instagram.com/philacclp">
          <AiOutlineInstagram />
        </OutboundLink>
        <OutboundLink href="https://twitter.com/philacclp">
          <AiOutlineTwitter />
        </OutboundLink>
        <OutboundLink href="https://facebook.com/philacclp">
          <AiOutlineFacebook />
        </OutboundLink>
      </div>
    </footer>
  );
}
export default Footer;
