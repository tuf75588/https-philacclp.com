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
      <h3 css={css``}>Frequently asked questions</h3>
      <ul>
        {questions.map((item) => {
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
              key={item.question}
            >
              <div onClick={() => toggleExpand(item)}>
                <FaPlusSquare />
              </div>

              <p>{item.question}</p>
            </li>
          );
        })}
      </ul>
      {JSON.stringify(questions, 2, null)}
    </Container>
  );
}
export default FAQ;
