import Player from '../player';
import Square from '../square';
import Piece from './piece';
import GameSettings from '../../engine/gameSettings';

export default class Bishop extends Piece {
    constructor(player) {
        super(player);
    }


       getAvailableMoves(board) {
        let location = board.findPiece(this);
        let row=location.row;
        let col=location.col;
        let output = [];

        let size = GameSettings.BOARD_SIZE
        let multipliers = [[1, 1], [1, -1], [-1, -1], [-1,1]]
 

            for (let i = 1; i < size; i++) {
                for (let j in multipliers){
                let suggestedsquare = Square.at(row + i * multipliers[j][0], col + i * multipliers[j][1])
                    if (suggestedsquare.isPossibleSquare()){
                        output.push(suggestedsquare)
                }}
            }
            return output;
        } 
    
    }
    