import React from 'react';

import {useStaticQuery, graphql} from 'gatsby';
import Layout from '../components/layout';
import Container from '../components/container';
import {css} from '@emotion/core';
import theme from '../../config/theme';
import Img from 'gatsby-image';
const AboutPage = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: {eq: "images/baby.jpg"}) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <Layout>
      <Container
        maxWidth={1200}
        css={css`
          display: flex;
          align-items: center;
          justify-content: space-around;
          @media (max-width: 800px) {
            flex-direction: column;
            .baby {
              width: 400px;
            }
            p {
              width: 80%;
            }
          }
        `}
      >
        <div
          css={css`
            width: 40%;
          `}
        >
          <Img fluid={data.file.childImageSharp.fluid} className="baby" />
        </div>
        <p
          css={css`
            font-family: ${theme.fonts.light};
            font-size: 1rem;
            line-height: 2.1;

            width: 50%;
          `}
        >
          Elaine has been a licensed speech language pathologist since 2014 and
          received her Masters in Speech Language Pathology in 2014 from The
          University of Maryland. She holds a Certificate of Clinical Competency
          (CCC) in Speech Language Pathology from the American
          Speech-Language-Hearing Association (ASHA) and a Pennsylvania license
          from the Board of Examiners in Speech Language Pathology. Elaine
          started Center City Language and Play to meet the growing need for
          quality caregiver training services within the greater Philadelphia
          area. She prides herself in providing one-on-one, child and family
          friendly services that build on the strengths found in each family’s
          unique dynamic. Elaine has extensive experience working with children
          and families of all ages in hospitals, schools, and private clinics.
          She has expertise in helping families learn techniques and strategies
          focused on facilitating speech, language, and play development.
        </p>
      </Container>
    </Layout>
  );
};

export default AboutPage;
