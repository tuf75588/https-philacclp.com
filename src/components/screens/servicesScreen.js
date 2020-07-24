import React from 'react';
import {css} from '@emotion/core';
import Container from '../container';
function ServicesCard() {
  return (
    <div
      css={css`
        width: 200px;
        height: 300px;
        border: 1px solid black;
        position: absolute;
      `}
    >
      card component
    </div>
  );
}

function ServicesScreen() {
  return (
    <Container>
      <ServicesCard />
    </Container>
  );
}

export default ServicesScreen;
