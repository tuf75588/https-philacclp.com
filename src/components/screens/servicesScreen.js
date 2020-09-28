import React from 'react';
import Container from '../container';
import {css} from '@emotion/core';
import {bpMaxSM} from '../../lib/breakpoints';
import {motion} from 'framer-motion';

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
            padding: 2rem;
            text-align: center;
            position: relative;
            height: 300px;
            width: 100%;
          }
          .price {
            position: absolute;
            width: 100%;
            background: white;
            padding: 1rem;
            opacity: 0.7;
            top: 0;
            left: 0;
          }
          .info {
            margin: 100px 0;
            width: 100%;
            padding: 0;
          }
          ${bpMaxSM} {
            background: red;
          }
        `}
      >
        <motion.div
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{duration: 0.8}}
          className="item"
        >
          <p className="price">$250</p>
          <div className="info">
            <span>Initial Consultation (0-2 Years)</span>
          </div>
        </motion.div>
        <motion.div
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{duration: 0.8}}
          className="item"
        >
          <p className="price">$300</p>
          <div className="info">
            <span>Initial Consultation (2-5 Years)</span>
          </div>
        </motion.div>
        <motion.div
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{duration: 0.8}}
          className="item"
        >
          <p className="price">$150</p>
          <div className="info">
            <span>Follow up sessions (1 Hour)</span>
          </div>
        </motion.div>
        <motion.div
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{duration: 0.8}}
          className="item"
        >
          <p className="price">$75</p>
          <div className="info">
            <span>Follow up sessions (30 minutes)</span>
          </div>
        </motion.div>
      </div>
    </Container>
  );
}

export default ServicesScreen;
