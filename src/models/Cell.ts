import {Colors} from "./Colors";
import {Figure} from "./figures/Figure";
import {Board} from "./Board";

export class Cell {
    x: number;
    y: number;
    color: Colors;
    figure: Figure | null;
    board: Board;
    available: boolean;
    id: number;

    constructor(board: Board, x: number, y: number, color: Colors, figure: Figure | null) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.figure = figure;
        this.board = board;
        this.available = false;
        this.id = Math.random()
    }
}