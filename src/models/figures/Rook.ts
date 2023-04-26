import {Figure, FigureNames} from "./Figure";
import {Colors} from "../Colors";
import {Cell} from "../Cell";
import blackLogo from "../../assets/BlackRook.svg";
import whiteLogo from "../../assets/WhiteRook.svg";

export class Rook extends Figure {
    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
        this.name = FigureNames.ROOK;
    }

    canMove(target: Cell): boolean {
        if (!super.canMove(target))
            return false;
        if (this.cell.verticallyAvailable(target))
            return true;
        return this.cell.horizontallyAvailable(target);
    }
}