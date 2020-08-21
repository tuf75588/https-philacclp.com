import React from 'react';
import styled from '@emotion/styled';
import theme from '../../../config/theme';
import Container from '../container';
import {css} from '@emotion/core';
import {renderStatic} from 'react-helmet';
function ServicesCard({text, price}) {
  return (
    <div
      css={{
        width: 320,
        border: '1px solid black',
        background: theme.colors.white,
        borderRadius: 5,
        padding: 30,
        position: 'relative',
        paddingBottom: 60,
        margin: 20,
        boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
      }}
    >
      <h2 css={{marginTop: 0}}>{text}</h2>
      <div css={{width: '100%'}}>
        <button
          css={{
            position: 'absolute',
            display: 'block',
            width: '100%',
            bottom: 0,
            left: 0,
            borderTopLeftRadius: '0',
            borderTopRightRadius: '0',
          }}
        >
          {price}
        </button>
      </div>
    </div>
  );
}

ServicesCard = React.memo(ServicesCard);

function ServicesScreen() {
  return (
    <div
      css={css`
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        margin: 0 auto;
      `}
    >
      <ServicesCard text="Initial Consultation (0-2 Years)" price="$250" />
      <ServicesCard text="Initial Consultation (2-5 Years)" price="$300" />
      <ServicesCard text="Follow up sessions (1 Hour)" price="$150" />
      {/* ugly workaround for the moment */}

      <ServicesCard text="Follow up sessions (30 Minutes)" price="$75" />
    </div>
  );
}

export default ServicesScreen;
