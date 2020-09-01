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
import {AiFillStar} from 'react-icons/ai';
const Card = ({
  backgroundColor = '#E75248',
  title,
  link,
  description,
  big = false,
  image,
  children,
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
      padding: 10px;
      h4 {
        font-size: 22px;
        padding: ${big ? '0 20px 0 0' : '40px 40px 0 40px'};
      }
      p {
        padding: 20px 40px 0 40px;
        font-size: 16px;
        opacity: 0.85;
        ${bpMaxSM} {
          padding: 20px 20px 0 40px;
       }
      }
      .title {
        margin-bottom: 1rem;
        text-align: center;
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
      <h4 className="title">
        {title}
        <hr
          css={css`
            opacity: 0.5;
          `}
        />
      </h4>
      <ul
        css={css`
          padding: 10px;
          li {
            margin: 5px;
            padding: 0;
          }
        `}
      >
        {children}
      </ul>
    </div>
    {image && (
      <img
        src={image}
        css={css`
          height: 100%;
          width: 100%;
        `}
        alt={title}
      />
    )}
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

      <div
        style={{
          display: 'flex',
          margin: '2rem auto 0 auto',
          width: 720,
          padding: '2rem 0',
          alignItems: 'center',
        }}
        className="outer-element"
      >
        <picture>
          <IntroPhoto />
        </picture>

        <ul
          css={css`
            margin-left: 10px;
            li {
              font-size: 1.1rem;
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
      </div>
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
