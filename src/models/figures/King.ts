import {Figure, FigureNames} from "./Figure";
import {Colors} from "../Colors";
import {Cell} from "../Cell";
import blackLogo from '../../assets/BlackKing.svg';
import whiteLogo from '../../assets/WhiteKing.svg';


export class King extends Figure {

    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
        this.name = FigureNames.KING;
    }

    canMove(target: Cell): boolean {
        if (!super.canMove(target))
            return false;
        return !(Math.abs(this.cell.x - target.x) > 1 || Math.abs(this.cell.y - target.y) > 1);
    }
}