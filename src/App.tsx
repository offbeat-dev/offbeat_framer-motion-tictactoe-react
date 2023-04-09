import Square from './components/Square';

function App() {
  const onSquareClick = () => {};
  return (
    <div className="App">
      <Square value="X" onSquareClick={onSquareClick} />
    </div>
  );
}

export default App;
