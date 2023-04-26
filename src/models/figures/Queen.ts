import {Figure, FigureNames} from "./Figure";
import {Colors} from "../Colors";
import {Cell} from "../Cell";
import blackLogo from "../../assets/BlackQueen.svg";
import whiteLogo from "../../assets/WhiteQueen.svg";

export class Queen extends Figure {
    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
        this.name = FigureNames.QUEEN;
    }

    canMove(target: Cell): boolean {
        if (!super.canMove(target))
            return false;
        if (this.cell.verticallyAvailable(target))
            return true;
        if (this.cell.horizontallyAvailable(target))
            return true;
        if (this.cell.diagonallyAvailable(target))
            return true;
        return false;
    }
}