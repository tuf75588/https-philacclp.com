import React, {useState, useEffect} from 'react';
import {css} from '@emotion/core';
import Container from '../container';
import {FaPlusSquare} from 'react-icons/fa';
import faqQuestions from '../../lib/questions.json';

function FAQ() {
  const [questions, setQuestions] = useState([]);
  const [expanded, toggleExpand] = useState(false);
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
                padding: 15px;
                border-radius: 5px;
                display: flex;
                align-items: center;

                svg {
                  height: 25px;
                  width: 25px;
                  cursor: pointer;
                }
                p {
                  margin-left: 10px;
                  margin-top: 5px;
                }
              `}
              key={order}
            >
              <div onClick={() => console.log('clicked!')}>
                <FaPlusSquare />
              </div>

              <p>{question}</p>
            </li>
          );
        })}
      </ul>
    </Container>
  );
}
export default FAQ;
