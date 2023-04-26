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
        this.id = Math.random();
    }

    isEmptyLine() {
        return this.figure === null;
    }

    isEnemy(target: Cell) {
        if(target.figure) {
            return this.figure?.color !== target.figure.color;
        }
        return false;
    }

    // kingIsChecked() {}
    // kingIsMated() {}

    verticallyAvailable(target: Cell): boolean {
        if (this.x !== target.x) {
            return false;
        }

        const min = Math.min(this.y, target.y);
        const max = Math.max(this.y, target.y);
        for (let i = min + 1; i < max; i++) {
            if (!this.board.getCell(this.x, i).isEmptyLine()) {
                return false
            }
        }
        return true;
    }

    horizontallyAvailable(target: Cell): boolean {
        if (this.y !== target.y) {
            return false
        }

        const min = Math.min(this.x, target.x);
        const max = Math.max(this.x, target.x);
        for (let i = min + 1; i < max; i++) {
            if (!this.board.getCell(i, this.y).isEmptyLine()) {
                return false
            }
        }
        return true;
    }

    diagonallyAvailable(target: Cell): boolean {
        const absX = Math.abs(target.x - this.x);
        const absY = Math.abs(target.y - this.y);
        if (absX !== absY)
            return false;

        const dx = this.x < target.x ? 1 : -1;
        const dy = this.y < target.y ? 1 : -1;

        for (let i = 1; i < absY; i++) {
            if (!this.board.getCell(this.x + dx * i, this.y + dy * i).isEmptyLine())
                return false;
        }
        return true;
    }

    setFigure(figure: Figure) {
        this.figure = figure;
        this.figure.cell = this;
    }

    moveFigure(target: Cell) {
        if (this.figure && this.figure?.canMove(target)) {
            this.figure.moveFigure(target);
            target.setFigure(this.figure);
            this.figure = null;
        }
    }

}