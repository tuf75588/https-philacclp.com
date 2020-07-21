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
              <div
                css={css`
                  padding: 2px 5px;
                  margin-right: 10px;
                  border: none;
                  cursor: pointer;
                  display: inline-block;
                `}
                onClick={() => toggleExpand(item)}
              >
                {item.isExpanded ? '-' : '+'}
              </div>
              {item.question}
              {item.isExpanded && (
                <div
                  css={css`
                    padding: 10px;
                    margin-top: 10px;
                  `}
                >
                  {item.answer}
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </Container>
  );
}
export default FAQ;
