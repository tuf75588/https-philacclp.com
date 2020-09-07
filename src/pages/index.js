import React from 'react';
import Layout from '../components/layout';
import Hero from '../components/hero';
import {bpMaxSM, bpMaxMD} from '../lib/breakpoints';
import Container from '../components/container';
import {css} from '@emotion/core';
import theme from '../../config/theme';
import IntroPhoto from '../components/intro-photograph';
import {AiFillStar} from 'react-icons/ai';

function IndexPage() {
  return (
    <Layout>
      <p
        css={css`
          padding: 1.1rem;
          text-align: center;
          margin: 0 auto;
          width: 100%;
          font-family: ${theme.fonts.light};
          @media (min-width: 1024px) {
            width: 500px;
          }
        `}
      >
        Center City Language and Play provides parent/caregiver training
        sessions focused on speech, language, and play skills. Visits are spent
        with a pediatric speech language pathologist and are designed to help
        enrich your child’s development.
      </p>
      <Hero />

      <h1
        css={{
          textAlign: 'center',
          paddingTop: '2rem',
          marginBottom: '-30px',
          fontFamily: 'Montserrat sans-serif',
        }}
      >
        Our Services
      </h1>
      <Container
        css={css`
          display: flex;
          @media (max-width: 500px) {
            display: flex;
            flex-direction: column;
          }
        `}
      >
        <div
          css={css`
            width: 100%;
          `}
        >
          <IntroPhoto />
        </div>

        <ul
          css={css`
            margin-left: 10px;
            li {
              font-size: 1rem;
              padding: 0.8rem;
              list-style-type: none;
              span {
                margin-right: 4px;
                svg {
                  margin-bottom: 4px;
                }
              }
            }
          `}
        >
          <li>
            <span>
              <AiFillStar />
            </span>
            Increase parent/caregiver knowledge regarding speech, language, and
            play milestones
          </li>
          <li>
            <span>
              <AiFillStar />
            </span>
            Help families develop and learn personally tailored strategies and
            ideas to nurture and stimulate skills
          </li>
          <li>
            <span>
              <AiFillStar />
            </span>
            Provide on-going support for families throughout each stage of
            development
          </li>
        </ul>
      </Container>
    </Layout>
  );
}

export default IndexPage;

/* 
        <div>
          <p>
            Center City Language and Play provides one-on-one sessions of
            skilled care-giver coaching and training. The entire visit is spent
            with a pediatric speech therapist and is personally tailored to your
            child to help promote his or her language and play development.
          </p>
          <p>
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
        </div>
*/

/* 
          <p>
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
*/
