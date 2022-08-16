import Player from '../player';
import Square from '../square';
import Piece from './piece';
import GameSettings from '../../engine/gameSettings';

export default class Queen extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let location = board.findPiece(this)
        let output = []

        for (let i = 0; i < GameSettings.BOARD_SIZE; i++) {
            if (i != location.row){
            output.push(
                Square.at(i, location.col)
            )}

            if (i != location.col){
            output.push(
                Square.at(location.row, i)
            )
            }

            if((location.row +i < 8) && (location.col - i >=0) && (i != 0)){
                output.push(Square.at(location.row + i, location.col - i));
            }
            if((location.row - i >= 0) && (location.col + i < 8) && (i != 0)){ 
                output.push(Square.at(location.row - i, location.col + i));
            }
            if((location.row - i >= 0) && (location.col - i >=0) && (i != 0)){
                output.push(Square.at(location.row - i, location.col - i));
            }
            if((location.row + i <8 ) && (location.col + i < 8) && (i != 0)){
                output.push(Square.at(location.row + i, location.col + i));
            }
        }
        return output;
    }
}
