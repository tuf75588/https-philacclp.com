import React from 'react';
import styled from '@emotion/styled';
import theme from '../../../config/theme';
import Container from '../container';
import {css} from '@emotion/core';
import {bpMaxSM} from '../../lib/breakpoints';

function ServicesScreen() {
  return (
    <div
      css={css`
        margin: 0 auto;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 10px;
        padding: 2em;
        ${bpMaxSM} {
          background: red;
        }
      `}
    >
      <div className="item">1</div>
      <div className="item">2</div>
      <div className="item">3</div>
      <div className="item">4</div>
      <div className="item">5</div>
      <div className="item">6</div>
    </div>
  );
}

export default ServicesScreen;
