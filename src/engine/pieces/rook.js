import Piece from './piece';
import Square from '../square';
import GameSettings from '../../engine/gameSettings';

export default class Rook extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let location = board.findPiece(this)
        let output = []

        for (let i = 0; i < GameSettings.BOARD_SIZE; i++) {
            if (i!= location.row){
            output.push(Square.at(i, location.col));
            }

            if (i!= location.col){
            output.push(
                Square.at(location.row, i));
            }
        }
        return output;
    }
}
