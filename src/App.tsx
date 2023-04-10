import { useState } from 'react';
import styled from 'styled-components';
import Board from './components/Board';
import GameHead from './components/GameHead';

const GameContainer = styled.div`
  padding: 30px 25px;
`;

const BoardContainer = styled.div`
  display: flex;
  min-block-size: 75vh;
  align-items: center;
`;

function App() {
  const [squares, setSquares] = useState<String[] | any[]>(Array(9).fill(null));
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;

  const handlePlay = (nextSquares: String[] | any[]) => {
    if (currentMove === 9) {
      return;
    }
    setSquares(nextSquares);
    setCurrentMove(currentMove + 1);
  };

  return (
    <div className="App">
      <GameContainer>
        <GameHead />
        <BoardContainer>
          <Board xIsNext={xIsNext} squares={squares} onPlay={handlePlay} />
        </BoardContainer>
      </GameContainer>
    </div>
  );
}

export default App;
