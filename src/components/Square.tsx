import styled from 'styled-components/macro';
import { motion } from 'framer-motion';
import { useState } from 'react';

interface ISquareProps {
  value: String | null;
  onSquareClick: () => void;
}

const Button = styled.button`
  border: 2px solid black;
  padding: 10px;
  position: relative;
  z-index: 0;
  aspect-ratio: 1;
  min-inline-size: 100px;

  &::after {
    content: '';
    position:absolute;
    inset: 0;
    background: #FFF;
    z-index: -1;
    filter: opacity(60%) blur(2px);
  }
`;

const Square = ({ value, onSquareClick }: ISquareProps) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    onSquareClick();
  };

  const draw = {
    notClicked: { pathLength: 0, opacity: 0 },
    clicked: (d: number) => {
      const delay = d * 0.5;
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay, type: 'spring', duration: 1.5, bounce: 0 },
          opacity: { delay, duration: 0.01 },
        },
      };
    },
  };

  return (
    <Button onClick={handleClick}>
      <motion.svg
        viewBox="0 0 100 100"
        initial="notClicked"
        animate={clicked ? 'clicked' : 'notClicked'}
      >
        {value === 'O' && (
          <motion.circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="#ff0055"
            strokeWidth="10"
            variants={draw}
            custom={0}
          />
        )}
        {value === 'X' && (
          <>
            <motion.line
              x1="5"
              y1="5"
              x2="95"
              y2="95"
              stroke="#0D63F8"
              strokeWidth="10"
              strokeLinecap="round"
              variants={draw}
              custom={0}
            />
            <motion.line
              x1="95"
              y1="5"
              x2="5"
              y2="95"
              stroke="#0D63F8"
              strokeWidth="10"
              strokeLinecap="round"
              variants={draw}
              custom={1}
            />
          </>
        )}
      </motion.svg>
    </Button>
  );
};

export default Square;
