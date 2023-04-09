import { motion } from 'framer-motion';
import { useState } from 'react';

interface ISquareProps {
  value: String | null;
  onSquareClick: () => void;
}

const Square = ({ value, onSquareClick }: ISquareProps) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    onSquareClick();
  };

  const draw = {
    notClicked: { pathLength: 0, opacity: 0 },
    clicked: () => {
      const delay = 0;
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
    <button className="square" onClick={handleClick}>
      <motion.svg
        width="100"
        height="100"
        viewBox="0 0 100 100"
        initial="notClicked"
        animate={clicked ? 'clicked' : 'notClicked'}
      >
        <motion.circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke="#ff0055"
          strokeWidth="10"
          variants={draw}
        />
      </motion.svg>
    </button>
  );
};

export default Square;
