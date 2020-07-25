import React from 'react';
import {css} from '@emotion/core';
import theme from '../../config/theme';
import {bpMaxSM} from '../lib/breakpoints';
import Container from './container';
function Footer({maxWidth}) {
  return (
    <footer
      css={css`
        background: ${theme.colors.purple_dark};
        margin-top: 70px;
        color: white;
      `}
    >
      <Container
        maxWidth={maxWidth}
        css={css`
          padding-top: 0;
          padding-top: 0;
          display: flex;
          align-items: center;
          justify-content: space-between;
          ${bpMaxSM} {
            padding-top: 0;
            flex-direction: column;
          }
        `}
      >
        footer component
        <div
          css={css`
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            div,
            img {
              margin: 50px 0;
              ${bpMaxSM} {
                margin: 20px 0;
              }
            }
            ${bpMaxSM} {
              align-items: center;
            }
          `}
        >
          <div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
