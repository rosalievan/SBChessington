import Piece from './piece';

export default class King extends Piece {
    constructor(player) {
        super(player);
        this.name = "King"
    }

    getAvailableMoves(board) {
        return new Array(0);
    }
}
