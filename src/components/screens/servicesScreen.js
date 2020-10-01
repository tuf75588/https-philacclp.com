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
            <p>initial consultation</p>
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
            <p>initial consultation</p>
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
            <p>initial consultation</p>
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
            <p>initial consultation</p>
          </div>

          <div className="back"></div>
        </motion.div>
      </div>
    </Container>
  );
}

export default ServicesScreen;
