import React, {useState, useEffect} from 'react';
import {css} from '@emotion/core';
import Container from '../container';
import faqQuestions from '../../lib/questions.json';
function FAQ() {
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    console.log('re-rendering!');
    setQuestions(faqQuestions);
  });
  return (
    <Container>
      <h3 css={css``}>Frequently asked questions</h3>
      <ul>
        {questions.map(({question, order, isExpanded, answer}) => {
          return (
            <li
              css={css`
                list-style-type: none;
                border: 0.5px solid rgba(0, 0, 0, 0.2);
                padding: 10px;
                border-radius: 5px;
              `}
              key={order}
            >
              {question}
            </li>
          );
        })}
      </ul>
    </Container>
  );
}
export default FAQ;
