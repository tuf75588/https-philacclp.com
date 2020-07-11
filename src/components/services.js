import React from 'react';
import {css} from '@emotion/core';
function Services() {
  return (
    <div
      css={css`
        text-align: center;
        margin-top: 2rem;
        font-size: 2rem;
        background-color: mistyrose;
        width: 70vw;
        margin: 1rem auto;
        p {
          padding: 0;
          margin: 0;
        }
      `}
    >
      <p>Services</p>
      <p>Evaluations and Therapy</p>
    </div>
  );
}

export default Services;
