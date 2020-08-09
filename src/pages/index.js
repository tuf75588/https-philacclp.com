import React from 'react';
import Layout from '../components/layout';
import Hero from '../components/hero';
import {bpMaxSM, bpMaxMD} from '../lib/breakpoints';
import Container from '../components/container';
import {css} from '@emotion/core';
import Link from '../components/link';
import theme from '../../config/theme';
import IntroPhoto from '../components/intro-photograph';
import servicesImg from '../images/servicesImg.svg';
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
    {image && <img src={image} alt={title} />}
  </Link>
);

function IndexPage() {
  return (
    <Layout>
      <Container
        css={css`
          margin-top: -20px;
          position: relative;
          border-radius: 5px;
          padding: 40px 80px 60px 80px;
        `}
      >
        <Hero />
      </Container>

      <div
        css={css`
          display: flex;
          justify-content: center;
        `}
      >
        <div style={{width: 400}}>
          <IntroPhoto />
        </div>
        <span
          css={css`
            margin-left: 1rem;
            width: 300px;
          `}
        >
          Fusce finibus euismod eros, sed imperdiet enim ultrices eget. Aenean
          hendrerit sagittis lacus, ac ornare ipsum. Etiam vel risus magna.
          Nulla dictum mi ut quam ultrices congue. Sed eu elit dictum ex
          elementum dictum eu eget nunc. Nullam lacinia dui ante. Aenean vel
          feugiat est, at cursus libero. Aliquam a eleifend dolor, sed lobortis
          lacus. Vestibulum ante ipsum primis in faucibus orci luctus et
          ultrices posuere cubilia curae; Sed sed ultrices sem, eu
        </span>
      </div>
      <Container>
        <Card
          big
          backgroundColor={theme.colors.red}
          title="Our Services"
          link="/services"
          image={servicesImg}
          description="We offer a range of different services for your conveninence, please click anywhere here to learn more."
        />
      </Container>
    </Layout>
  );
}

export default IndexPage;
