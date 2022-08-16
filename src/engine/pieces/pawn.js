import Player from '../player';
import Square from '../square';
import Piece from './piece';
import GameSettings from '../../engine/gameSettings';

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let location = board.findPiece(this)
        
        // white pawns
        if (this.player === Player.WHITE) {
            for (let i = 0; i < GameSettings.BOARD_SIZE; i++) {
                if (location.row == 1){
                    return [Square.at(location.row + 1, location.col), Square.at(location.row + 2, location.col)]
                } else {
                    return [Square.at(location.row + 1, location.col)]
                }
            }
        } 

        // black bawns
        else {
            for (let i = 0; i < GameSettings.BOARD_SIZE; i++) {
                if (location.row == 6){
                    return [Square.at(location.row - 1, location.col), Square.at(location.row - 2, location.col)]
                } else {
                    return [Square.at(location.row - 1, location.col)]
                }
            }
        }
    }
}
