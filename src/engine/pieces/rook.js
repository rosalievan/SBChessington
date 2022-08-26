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
        let output = new Set();
        
        for (let i = 1; i <= GameSettings.BOARD_SIZE; i++) {
                let suggestedsquare1 = Square.at(row + i, col)
                if(suggestedsquare1.isPossibleSquare()){
                    if(board.checkIfEmpty(suggestedsquare1)){
                        output.add(suggestedsquare1);
                    }
                    else {
                        break
                    }
            }
        }
        for (let i = 1; i <= GameSettings.BOARD_SIZE; i++) {
                let suggestedsquare2 = Square.at(row - i, col)
                if(suggestedsquare2.isPossibleSquare()){
                    if(board.checkIfEmpty(suggestedsquare2)){
                        output.add(suggestedsquare2);
                    }
                    else {
                        break
                    }
            }
        }
        for (let i = 1; i <= GameSettings.BOARD_SIZE; i++) {
                let suggestedsquare3 = Square.at(row, col + i)
                if (suggestedsquare3.isPossibleSquare()){
                    if(board.checkIfEmpty(suggestedsquare3)){
                        output.add(suggestedsquare3);
                    }

                    else {
                        break
                    }
            }
        }

        for (let i = 1; i <= GameSettings.BOARD_SIZE; i++) {

                let suggestedsquare4 = Square.at(row, col - i)
                if (suggestedsquare4.isPossibleSquare()){
                    if(board.checkIfEmpty(suggestedsquare4)){
                        output.add(suggestedsquare4);
                    }

                    else {
                        break
                    }
            }
        }
    
        output = Array.from(output)
        return output  
    
    }
}
