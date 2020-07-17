import React from 'react';
import {css} from '@emotion/core';
import Container from '../container';
function ContactForm() {
  const [clicked, toggleClick] = React.useState(false);
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
        <form>
          <label htmlFor="first-name">first name</label>
          <div>
            <input type="text" name="name" id="first-name" placeholder="Jane" />
          </div>
          <label htmlFor="last-name">last name</label>
          <div>
            <input
              type="text"
              id="last-name"
              name="last-name"
              placeholder="Doe"
            />
          </div>
          <label htmlFor="message">message</label>
          <div>
            <textarea
              rows="8"
              id="message"
              placeholder="message...."
              name="message"
            ></textarea>
          </div>
        </form>
        <button onClick={() => toggleClick(!clicked)}>Submit</button>
      </div>
    </Container>
  );
}

export default ContactForm;
