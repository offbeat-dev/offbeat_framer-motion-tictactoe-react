import styled from 'styled-components/macro';
import Square from './Square';
import GameHead from './GameHead';

interface IBoardProps {
  xIsNext: Boolean;
  squares: String[] | any[];
  onPlay: (a: any) => void;
}

const Container = styled.div`
  position: relative;
  inline-size: 100%;
`;

const BoardContainer = styled.div`
    inline-size: fit-content;
    margin: 90px auto 0;
    border: 2px solid #000;
    position: relative;
    z-index: 0;

    & > div{
      inline-size: auto;
    }
`;

const TitleContainer = styled.div`
    position: absolute;
    inline-size: 100%
    z-index: -2;
    block-size: auto;
`;

const BoardRow = styled.div`
display: flex;
justify-content: space-between;
`;

const Board = ({ xIsNext, squares, onPlay }: IBoardProps) => {
  const handleClick = (i: number) => {
    const nextSquares = squares.slice();
    if (nextSquares[i] !== null) return;
    if (xIsNext) {
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = 'O';
    }
    onPlay(nextSquares);
  };

  return (
    <Container>
      <TitleContainer>
        <GameHead />
      </TitleContainer>
      <BoardContainer>
        <BoardRow>
          <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
          <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
          <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
        </BoardRow>
        <BoardRow>
          <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
          <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
          <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
        </BoardRow>
        <BoardRow>
          <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
          <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
          <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
        </BoardRow>
      </BoardContainer>
    </Container>
  );
};

export default Board;
