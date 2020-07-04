import React from 'react';
//import './App.css';

import MinesGame from './components/MinesGame';
import MinesGameParameters from './components/MinesGameParameters';

function App({ initialData }) {
  const defaultHeight = () => {
    return 10;
  };

  const [gameId, setGameId] = React.useState(1);
  const [height, setHeight] = React.useState(defaultHeight);
  const [width, setWidth] = React.useState(10);
  const [mines, setMines] = React.useState(2);




  return (
    <div>
      <div>
        <MinesGameParameters key={gameId} height={height} setHeight={setHeight} width={width} setWidth={setWidth} mines={mines} setMines={setMines} />
      </div>
      <div>
        <MinesGame key={gameId} height={height} width={width} mines={mines} startNewGame={() => setGameId(gameId + 1)} />
      </div>
      <div>
        gameId: {gameId}
      </div>
    </div>
  );
}

export default App;
