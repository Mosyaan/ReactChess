import React, {useEffect, useState} from 'react';
import './App.css'
import BoardComponent from "./components/BoardComponent";
import {Board} from "./models/Board";
import {Player} from "./models/Player";
import {Colors} from "./models/Colors";

const App = () => {
    // COMMENT: если переменную не нужно менять через setter, лучше использовать useMemo
    const [board, setBoard] = useState(new Board());
    const [whitePlayer] = useState(new Player(Colors.WHITE));
    const [blackPlayer] = useState(new Player(Colors.BLACK));
    const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null);

    // COMMENT: в этом эффекте нет надобности, можно задать дефолтные значения вместо него
    useEffect(() => {
       restart();
       setCurrentPlayer(whitePlayer);
    }, []);

    // COMMENT: перезапуск можно перенести в Board
    function restart() {
        const newBoard = new Board();
        newBoard.initCells();
        newBoard.addFigures()
        setBoard(newBoard);
    }

    function turnPlayer() {
        setCurrentPlayer(currentPlayer?.color === Colors.WHITE ? blackPlayer : whitePlayer)
    }

  return (
      <div className={'app'}>
          <BoardComponent
              board={board}
              setBoard={setBoard}
              currentPlayer={currentPlayer}
              turnPlayer={turnPlayer}
          />
      </div>
  );
};

export default App;
