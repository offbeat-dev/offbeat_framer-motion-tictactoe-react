import styled from 'styled-components';
import { motion } from 'framer-motion';

const Title = styled.h1`
  font-family: 'Josefin Sans', cursive;
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
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Tic
        </motion.span>
        &nbsp;
        <motion.span
          style={{ display: 'inline-block' }}
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Tac
        </motion.span>
        &nbsp;
        <motion.span
          style={{ display: 'inline-block' }}
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Toe
        </motion.span>
      </Title>
    </TitleContainer>
  );
};

export default GameHead;
