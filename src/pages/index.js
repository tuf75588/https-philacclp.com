import React from 'react';
import Layout from '../components/layout';
import Hero from '../components/hero';
import Introduction from '../components/home-intro';
import Services from '../components/services';
import {fonts, rhythm} from '../lib/typography';
import {bpMaxXS, bpMaxSM, bpMaxMD} from '../lib/breakpoints';
import Container from '../components/container';
import {css} from '@emotion/core';
import Link from '../components/link';
import theme from '../../config/theme';
import styled from '@emotion/styled';
const Card = ({
  backgroundColor = '#E75248',
  title,
  link,
  description,
  big = false,
  image,
}) => (
  <Link
    to={link}
    aria-label={`View ${title}`}
    css={css`
  * {
    color: white;
    margin: 0;
  }
  display: flex;
  justify-content: space-between;
  align-items: center;
  h4 {
    font-size: 22px;
    padding: ${big ? '0 20px 0 40px' : '40px 40px 0 40px'};
  }
  p {
    padding: 20px 40px 0 40px;
    font-size: 16px;
    opacity: 0.85;
    ${bpMaxSM} {
      padding: 20px 20px 0 40px;
    }
  }
  ${bpMaxMD} {
      flex-direction: column;
      align-items: center;
      ${
        big &&
        `
      text-align: center;
      h4 {
        padding: 40px 40px 0 40px;
      }
      img {
        width: 100%;
      }
      p {
        padding-bottom: 40px;
      }
      `
      }
    }
  ${
    !big &&
    `
    align-items: flex-start;
    flex-direction: column;
    img {
      margin-top: 20px;
    }
    ${bpMaxMD} {
      align-items: center;
      img {
        width: 100%;
      }
     h4 {
       padding: 40px 0 0 0;
     }
    }
  `
  }
  background: ${backgroundColor};
  overflow: hidden;
  border-radius: 5px;
  margin-bottom: ${big ? '20px' : '0'};
  img {
    transition: ${theme.transition.ease};
  }
  @media (hover: hover) {
  :hover:not(.touch) {
    transform: scale(1.03);
    box-shadow: 0 10px 30px -5px rgba(0, 0, 0, 0.15);
  }
  }
`}
  >
    <div>
      <h4>{title}</h4>
      {description && <p>{description}</p>}
    </div>
  </Link>
);

const Description = styled.div`
  width: 100%;
  p {
    margin-bottom: 4px;
  }
`;

function IndexPage() {
  return (
    <Layout>
      <Container>
        <Hero />
      </Container>
      <Container>
        <Card
          big
          backgroundColor={theme.colors.blue}
          title="Consultation"
          description="A Service offered by CCLP"
          link="https://google.com"
        />
      </Container>
    </Layout>
  );
}

export default IndexPage;
