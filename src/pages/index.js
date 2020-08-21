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
      <p
        css={css`
          width: 500px;
          text-align: center;
          margin: 0 auto;
          font-family: ${theme.fonts.light};
        `}
      >
        Center City Language and Play provides parent/caregiver training
        sessions focused on speech, language, and play skills. Visits are spent
        with a pediatric speech language pathologist and are designed to help
        promote your child’s speech, language, and play skills.{' '}
      </p>
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
        <div style={{width: 400, height: '100%'}}>
          <IntroPhoto />
        </div>
        <span
          css={css`
            margin-left: 1rem;
            width: 300px;
          `}
        >
          Center City Language and Play provides one-on-one sessions of skilled
          care-giver coaching and training. The entire visit is spent with a
          pediatric speech therapist and is personally tailored to your child to
          help promote his or her language and play development.
          <p
            css={css`
              padding-top: 10px;
            `}
          >
            I work with you and your child within the place where you are most
            comfortable...in your home! Home-based services provide many
            benefits for your child. It offers convenience, allows for a
            comprehensive assessment of your child's true capabilities and
            assess function in the environment that is most familiar. This
            allows the therapist to capitalize on the child's everyday routine
            and create success. Sessions will incorporate your child's favorite
            toys, work on daily routines and activities, and encourage caregiver
            confidence in working with their child at home.
          </p>
        </span>
      </div>
      <Container>
        <Card
          big
          backgroundColor={theme.colors.red}
          title="Our Services"
          link="/services"
          image={servicesImg}
          description="Increase parent/caregiver knowledge regarding speech, language, and play milestones
          Help families develop and learn personally tailored strategies and ideas to nurture and stimulate skills
          Provide on-going support for families throughout each stage of development."
        />
      </Container>
    </Layout>
  );
}

export default IndexPage;
