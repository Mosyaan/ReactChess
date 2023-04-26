import {Figure, FigureNames} from "./Figure";
import {Colors} from "../Colors";
import {Cell} from "../Cell";
import blackLogo from "../../assets/BlackPawn.svg";
import whiteLogo from "../../assets/WhitePawn.svg";

export class Pawn extends Figure {

    isFirstMove: boolean = true;

    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
        this.name = FigureNames.PAWN;
    }

    canMove(target: Cell): boolean {
        if (!super.canMove(target))
            return false;
        const direction = this.cell.figure?.color === Colors.BLACK ? 1 : -1;
        const firstMoveDirection = this.cell.figure?.color === Colors.BLACK ? 2 : -2;

        if ((target.y === this.cell.y + direction || this.isFirstMove && (target.y === this.cell.y + firstMoveDirection)) && target.x === this.cell.x && this.cell.board.getCell(target.x, target.y).isEmptyLine()) {
            return true;
        }

        return target.y === this.cell.y + direction && (target.x === this.cell.x + 1 || target.x === this.cell.x - 1) && this.cell.isEnemy(target);

    }

    moveFigure(target: Cell) {
        super.moveFigure(target);
        this.isFirstMove = false;
    }
}