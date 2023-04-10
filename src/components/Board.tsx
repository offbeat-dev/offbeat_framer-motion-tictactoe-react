import Square from './Square';
import styled from 'styled-components';

interface IBoardProps {
  xIsNext: Boolean;
  squares: String[] | any[];
  onPlay: (a: any) => void;
}

const BoardContainer = styled.div`
    inline-size: fit-content;
    margin: 0 auto;
    border: 2px solid #000;

    & > div{
      inline-size: auto;
    }
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
    <BoardContainer>
      <div>
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div>
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div>
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </BoardContainer>
  );
};

export default Board;
