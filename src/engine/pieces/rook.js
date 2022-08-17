import Piece from './piece';
import Square from '../square';
import GameSettings from '../../engine/gameSettings';

export default class Rook extends Piece {
    constructor(player) {
        super(player);
    }
    

    getAvailableMoves(board) {
        let location = board.findPiece(this);
        let row=location.row;
        let col=location.col;
        let output = [];
        


        for (let i = 0; i < GameSettings.BOARD_SIZE; i++) {
            if (i!= row){
                if(board.checkIfEmpty(row+i, col)){
                     output.push(Square.at(i, col));
                }
                return output;
            }

            if (i!= col){
                if(board.checkIfEmpty(row, col+i)){
                    output.push(Square.at(row, i));
                }
                return output;

        }

        
        
    }
    }
}
