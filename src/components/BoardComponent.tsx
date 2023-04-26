import React, {FC, useState} from 'react';
import {Board} from "../models/Board";
import CellComponent from "./CellComponent";
import {Cell} from "../models/Cell";
import {Player} from "../models/Player";

interface BoardProps {
    board: Board;
    // COMMENT: проп не используется
    setBoard: (board: Board) => void;
    currentPlayer: Player | null;
    turnPlayer: () => void;
}

const BoardComponent: FC<BoardProps> = ({board, currentPlayer, turnPlayer}) => {
    const [selectedCell, setSelectedCell] = useState<Cell | null>(null);

    function click(cell: Cell) {
        if (selectedCell && selectedCell !== cell && selectedCell.figure?.canMove(cell)) {
            selectedCell.moveFigure(cell);
            turnPlayer();
            setSelectedCell(null);
        } else if (cell.figure) {
            if (cell.figure?.color === currentPlayer?.color)
            setSelectedCell(cell);
        }
    }

    /*
    function updateBoard() {
        const newBoard = board.getCopyBoard()
        setBoard(newBoard)
    }
    */

    return (
        <div className='board'>
            {board.cells.map((row, index) =>
                // COMMENT: через двойной map можно развернуть матрицу и избавиться от фрагмента
               <React.Fragment key={index}>
                   {row.map(cell =>
                    <CellComponent
                        click={click}
                        cell={cell}
                        key={cell.id}
                        // COMMENT: можно использовать сравнение по id
                        selected={cell.x === selectedCell?.x && cell.y === selectedCell?.y}
                    />
                   )}
               </React.Fragment>
            )}
        </div>
    );
};

export default BoardComponent;
