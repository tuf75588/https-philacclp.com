import React, {useState} from 'react';
import {css} from '@emotion/core';
import Container from '../container';
import {FaPlusSquare} from 'react-icons/fa';
import faqQuestions from '../../lib/questions.json';

function FAQ() {
  const [questions, setQuestions] = useState(faqQuestions);
  const toggleExpand = (q) => {
    /* shallow copy of state */
    const questionsList = [...questions];
    let findByTitle = questions.find((item) => item.question === q.question);
    let position = questions.findIndex((obj) => obj.question === q.question);
    findByTitle.isExpanded = !findByTitle.isExpanded;
    questionsList[position] = findByTitle;
    setQuestions(questionsList);
  };
  return (
    <Container>
      <h3>Frequently asked questions</h3>
      <ul>
        {questions.map((item) => {
          return (
            <li
              css={css`
                border: 1px solid rgba(0, 0, 0, 0.1);
                padding: 1rem;
                list-style-type: none;
              `}
              key={item.question}
            >
              <button
                css={css`
                  background: #000;
                  height: 100%;
                  padding: 2px 5px;
                  margin-right: 10px;
                  color: #000;
                  background: #fff;
                  &:hover {
                    background: grey !important;
                    color: #fff !important;
                    transition: background-color 0.5s !important;
                  }
                  &:focus {
                    outline: none;
                  }
                `}
                onClick={() => toggleExpand(item)}
              >
                {item.isExpanded ? '-' : '+'}
              </button>
              {item.question}
              {item.isExpanded && (
                <div
                  css={css`
                    padding: 10px;
                  `}
                >
                  {item.answer}
                </div>
              )}
            </li>
          );
        })}
      </ul>
      {JSON.stringify(questions, 2, null)}
    </Container>
  );
}
export default FAQ;
