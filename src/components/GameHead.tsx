import styled from 'styled-components/macro';
import { motion } from 'framer-motion';

const Title = styled.h1`
  font-family: 'Josefin Sans', cursive;
  font-size: clamp(4rem, 100px, 8rem);
  color: #EEEEEE;
  
`;

const TitleContainer = styled.div`
  overflow: hidden;
`;

const GameHead = () => {
  return (
    <TitleContainer>
      <Title>
        <motion.span
          style={{ display: 'inline-block' }}
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Tic
        </motion.span>
        &nbsp;
        <motion.span
          style={{ display: 'inline-block' }}
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Tac
        </motion.span>
        &nbsp;
        <motion.span
          style={{ display: 'inline-block' }}
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Toe
        </motion.span>
      </Title>
    </TitleContainer>
  );
};

export default GameHead;
