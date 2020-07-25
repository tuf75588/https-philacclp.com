import React from 'react';
import {Formik, Field, Form, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import {css} from '@emotion/core';
import styled from '@emotion/styled';
import theme from '../../../config/theme';
import {rhythm} from '../../lib/typography';
import {bpMaxSM} from '../../lib/breakpoints';

const SubscribeSchema = Yup.object().shape({
  email_address: Yup.string()
    .email('Invalid Email Address')
    .required('Required'),
  first_name: Yup.string(),
});

function PostSubmissionMessage() {
  return (
    <div
      css={css`
        h2 {
          color: white !important;
        }
      `}
    >
      Thank you for signing up!
    </div>
  );
}

const SubscribeFormWrapper = styled.div({
  color: 'white',
  maxWidth: '350px',
  padding: '40px',
  background: theme.colors.purple_dark,
  backgroundImage:
    'linear-gradient(-213deg, #5e31dc 0%, #3155dc 100%), linear-gradient(32deg, rgba(255, 255, 255, 0.25) 33%, rgba(0, 0, 0, 0.25) 100%)',
  borderRadius: '5px',
});

const formCss = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  label {
    margin: 10px 0;
  }
  .field-error {
    display: block;
    color: rgba(255, 255, 255, 0.75);
    font-size: 80%;
  }
  input,
  label {
    width: 100%;
    font-size: 16px;
  }

  ${bpMaxSM} {
    flex-direction: column;
    align-items: flex-start;
    width: auto;
    label,
    input {
      margin: 5px 0 0 0 !important;
      width: 100%;
      display: flex;
      flex-direction: column;
    }
    button {
      margin-top: 20px;
      font-size: 16px;
    }
  }
`;

const StyledForm = styled.form`
  ${formCss}
`;

const StyledFormFormikForm = styled(form)`
  ${formCss}
`;

export function TinyLetterSubscribe() {
  return (
    <SubscribeFormWrapper>
      <StyledForm
        action="https://tinyletter.com/philacclptest"
        method="post"
        target="popupwindow"
        onSubmit={() => {
          window.open(
            'https://tinyletter.com/philacclptest',
            'popupwindow',
            'scrollbar=yes, width=800,height=600'
          );
          return true;
        }}
      >
        <h3
          css={css`
            margin-bottom: ${rhythm(1)};
            margin-top: 0;
            color: white;
          `}
        >
          Keep up to date with us!
        </h3>
        <p>
          <label htmlFor="tlemail">Email address</label>
          <input
            type="email"
            name="email"
            id="tlemail"
            aria-label="your email address"
            aria-required="true"
          />
        </p>
        <input type="hidden" value="1" name="embed" />
        <button type="submit">Submit</button>
      </StyledForm>
    </SubscribeFormWrapper>
  );
}
