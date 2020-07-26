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
  }
  button {
    margin-top: 20px;
    font-size: 16px;
  }
`;

const StyledForm = styled.form`
  ${formCss}
`;

const StyledFormikForm = styled(Form)`
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

function fetchReducer(state, {type, response, error}) {
  switch (type) {
    case 'fetching': {
      return {error: null, response: null, pending: true};
    }
    case 'success': {
      return {error: null, response, pending: false};
    }
    case 'error': {
      return {error, response: null, pending: false};
    }
    default:
      throw new Error(`Unsupported type ${type}`);
  }
}

function useFetch({url, body}) {
  const [state, dispatch] = React.useReducer(fetchReducer, {
    error: null,
    response: null,
    pending: false,
  });
  const bodyString = JSON.stringify(body);
  React.useEffect(() => {
    if (url && bodyString) {
      dispatch({type: 'fetching'});
      fetch(url, {
        method: 'post',
        body: bodyString,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })
        .then((r) => r.json())
        .then((response) => dispatch({type: 'success', response}))
        .catch((error) => {
          dispatch({type: 'error', error});
        });
    }
  }, [url, bodyString]);
  return state;
}

function Subscribe({style, tags = [], header = 'Join the Newsletter'}) {
  console.log('clicked the subscribe button!');
  const [values, setValues] = React.useState();
  const {pending, response, error} = useFetch({
    url: 'temporary-link.com',
    body: values,
  });
  const errorMessage = error ? 'Something went wrong!' : null;
  const submitted = Boolean(response);
  const successfulResponse = response && response.status === 'success';
  return (
    <SubscribeFormWrapper style={style}>
      {!successfulResponse && (
        <h3
          css={css`
            margin-bottom: ${rhythm(1)};
            margin-top: 0;
            color: white;
          `}
        >
          {header}
        </h3>
      )}
      {!successfulResponse && (
        <Formik
          initialValues={{
            email_address: '',
            first_name: '',
            tags,
          }}
          validationSchema={SubscribeSchema}
          onSubmit={setValues}
        >
          {() => (
            <StyledFormikForm>
              <label htmlFor="first_name">
                <div
                  css={css`
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-end;
                  `}
                >
                  First Name
                  <ErrorMessage
                    name="first_name"
                    component="span"
                    className="field-error"
                  />
                </div>
              </label>
              <Field
                id="first_name"
                aria-required="false"
                name="first_name"
                placeholder="Jane"
                type="text"
              />
              <label htmlFor="email">
                <div
                  css={css`
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-end;
                  `}
                >
                  Email
                  <ErrorMessage
                    name="email_address"
                    component="span"
                    className="field-error"
                  />
                </div>
              </label>
              <Field
                id="email"
                aria-required="true"
                name="email_address"
                placeholder="jane@acme.com"
                type="email"
              />
              <button data-element="submit" type="submit">
                {!pending && 'Do not click this yet'}
                {pending && 'Submitting...'}
              </button>
            </StyledFormikForm>
          )}
        </Formik>
      )}
    </SubscribeFormWrapper>
  );
}

export default Subscribe;
