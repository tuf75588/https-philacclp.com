import React from 'react';
import {css} from '@emotion/core';
import Container from '../container';
function FAQ() {
  return (
    <Container>
      <h3
        css={css`
          text-align: center;
          margin: 0;
          padding: 0;
        `}
      >
        Frequently asked questions
      </h3>
    </Container>
  );
}
export default FAQ;
