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
                let suggestedsquare1 = Square.at(i, col)
                if(board.checkIfEmpty(suggestedsquare1)){
                     output.push(suggestedsquare1);
                }
                else{
                break}
            }

            if (i!= col){
                let suggestedsquare2 = Square.at(row, i)
                if(board.checkIfEmpty(suggestedsquare2)){
                    output.push(suggestedsquare2);
                } else {
                    break
                }}}
            return output;  
    
    }
}
