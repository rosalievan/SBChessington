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

        for (let i =0 ; i<4; i++){
            for (let j = 1; j <= GameSettings.BOARD_SIZE; j++) {
                let parameters = [[row+j, col], [row - j, col], [row, col + j], [row, col - j]]
                let suggestedsquare1 = Square.at(parameters[i][0], parameters[i][1])
                if(suggestedsquare1.isPossibleSquare()){
                    if(board.checkIfEmpty(suggestedsquare1)){
                        output.push(suggestedsquare1);
                    } else {
                        break
                    }
                }
            }
        }
        return output
    } 
}
    

