import React from 'react';
import styled from '@emotion/styled';
import theme from '../../../config/theme';
import Container from '../container';
function ServicesCard() {
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
      <h2 css={{marginTop: 0}}>Consultation</h2>
      <div css={{width: '100%'}}>
        <button
          css={{
            position: 'relative',
            display: 'block',
            width: '100%',
            bottom: 0,
            left: 0,
            borderTopLeftRadius: '0',
            borderTopRightRadius: '0',
          }}
        >
          Find out more
        </button>
      </div>
    </div>
  );
}

ServicesCard = React.memo(ServicesCard);

function ServicesScreen() {
  return (
    <Container>
      <ServicesCard />
    </Container>
  );
}

export default ServicesScreen;
