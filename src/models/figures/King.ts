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
}