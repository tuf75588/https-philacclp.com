import React from 'react';
import {css} from '@emotion/core';
import Container from '../container';
import {navigate} from 'gatsby';

function encode(data) {
  return Object.keys(data)
    .map((key) => {
      return encodeURIComponent(key) + '=' + encodeURIComponent(data[key]);
    })
    .join('&');
}

function ContactForm() {
  const [state, setState] = React.useState({});

  const handleChange = (e) => {
    setState({...state, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch('/', {
      method: 'POST',
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error));
  };

  return (
    <Container>
      <div
        css={css`
          margin: 0 auto;
          font-size: 0.75rem;

          label {
            padding: 0;
            margin: 0;
          }

          h2 {
            margin-top: -1rem;
            text-align: center;
          }
          form > div {
            margin: 0.5rem 0;
          }
          input,
          textarea {
            width: 100%;
          }
        `}
      >
        <h2>Contact us</h2>
        <form
          name="contact"
          method="post"
          action="/thanks/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
        >
          <label htmlFor="first-name">first name</label>
          <div>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              id="first-name"
              placeholder="Jane"
            />
          </div>
          <label htmlFor="last-name">last name</label>
          <div>
            <input
              type="text"
              id="last-name"
              name="last-name"
              placeholder="Doe"
              onChange={handleChange}
            />
          </div>
          <label htmlFor="message">message</label>
          <div>
            <textarea
              rows="8"
              id="message"
              placeholder="message...."
              name="message"
              onChange={handleChange}
            ></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </Container>
  );
}

export default ContactForm;
