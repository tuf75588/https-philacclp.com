import React from 'react';
import Container from '../container';
import {css} from '@emotion/core';
import {bpMaxSM} from '../../lib/breakpoints';
import {motion} from 'framer-motion';
import image from '../../images/card-image.jpg';
import image2 from '../../images/card-image2.jpg';
import image3 from '../../images/card-image3.jpg';
import image4 from '../../images/card-image4.jpg';
function ServicesScreen() {
  return (
    <React.Fragment>
      <Container maxWidth={1000}>
        <div
          css={css`
            margin: 0 auto;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 10px;

            .item {
              background-image: radial-gradient(
                circle 753.6px at 10% 20%,
                rgba(248, 167, 221, 1) 0%,
                rgba(230, 192, 254, 1) 41%,
                rgba(169, 217, 243, 1) 90%
              );
              border-radius: 2px;
              text-align: center;

              padding: 0;
            }
            .front p {
              font-size: 15px;
            }

            .front img {
              display: block;
              margin-bottom: 0;
              opacity: 0.5;
              height: 200px;
            }
            .item:hover {
              transform: scale(1.25);
              transition: all 0.5s ease;
              z-index: 10;
              font-size: inherit;
            }
          `}
        >
          <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 0.8}}
            className="item"
          >
            <div className="front">
              <img src={image} />
              <p>Initial consultation (0-2 Years)</p>
              <div className="price">$250.00</div>
            </div>

            <div className="back"></div>
          </motion.div>
          <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 0.8}}
            className="item"
          >
            <div className="front">
              <img src={image2} />
              <p>Initial consultation (3-5 Years)</p>
              <div className="price">$300.00</div>
            </div>
            <div className="back"></div>
          </motion.div>
          <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 0.8}}
            className="item"
          >
            <div className="front">
              <img src={image3} />
              <p>Follow up sessions (1 hour)</p>
              <div className="price">$150.00</div>
            </div>

            <div className="back"></div>
          </motion.div>
          <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 0.8}}
            className="item"
          >
            <div className="front">
              <img src={image4} />
              <p>Follow up sessions (30 minutes)</p>
              <div className="price">$75.00</div>
            </div>

            <div className="back"></div>
          </motion.div>
        </div>
      </Container>
      <Container
        css={css`
          .appointment-link {
            margin: 0 auto;
            text-align: center;
          }
          .appointment-link a {
            background: #f2f2f2;
            padding: 1rem;
            border-radius: 5px;
            border: 0.5px solid purple;
            color: #000;
          }
          .appointment-link a:hover {
            background-color: lightgrey;
            cursor: pointer;
          }
          .appointment-link a:visited {
            color: black;
          }
        `}
      >
        <div className="appointment-link">
          <a
            href="https://elaine-davis.clientsecure.me"
            className="spwidget-button"
            data-spwidget-scope-id="99220159-2532-4b78-a6a5-467af79d9070"
            data-spwidget-scope-uri="elaine-davis"
            data-spwidget-application-id="7c72cb9f9a9b913654bb89d6c7b4e71a77911b30192051da35384b4d0c6d505b"
          >
            Request an appointment today
          </a>
        </div>
      </Container>
    </React.Fragment>
  );
}

export default ServicesScreen;
