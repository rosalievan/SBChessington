import Player from '../player';
import Square from '../square';
import Piece from './piece';
import GameSettings from '../../engine/gameSettings';

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }

    
    getAvailableMoves(board) {
        let location = board.findPiece(this);
        let row=location.row;
        let col=location.col;
        let output = [];

        // white pawns
        if (this.player === Player.WHITE) {
            for (let i = 0; i < GameSettings.BOARD_SIZE; i++) {
                
                if (location.row == 1){
                    if(board.checkIfEmpty(row + 1, col)){
                        output.push(Square.at(row + 1, col));
                    }
                    if(board.checkIfEmpty(row + 1, col) && board.checkIfEmpty(row + 2, col)){ 
                        output.push(Square.at(row + 2, col));
                    }
                    return output;
                }else {
                    if(board.checkIfEmpty(row + 1, col)){
                        output.push(Square.at(row + 1, col));
                    }
                    return output;
                }
            }
        } 

        // black bawns
        else {
            for (let i = 0; i < GameSettings.BOARD_SIZE; i++) {
              if (location.row == 6){
                 if(board.checkIfEmpty(row - 1, col)){
                    output.push(Square.at(row - 1, col));
                }
                if(board.checkIfEmpty(row - 1, col) && board.checkIfEmpty(row -2, col)){ 
                    output.push(Square.at(row - 2, col));
                }
                return output;
              } else {
                if(board.checkIfEmpty(row - 1, col)){
                    output.push(Square.at(row - 1, col));
                }
                return output;
             }
            }
        }

        
    }
}
