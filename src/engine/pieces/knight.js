import Player from '../player';
import Square from '../square';
import Piece from './piece';
import GameSettings from '../../engine/gameSettings';

export default class Knight extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let output = []
        let location = board.findPiece(this);
        let row=location.row;
        let col=location.col;

        let size = GameSettings.BOARD_SIZE

        let moves = [[1,2], [1, -2], [2, 1], [2,-1], [-1, 2], [-1, -2], [-2, 1], [-2, -1]]
        
        for (let i in moves){
            let combination = moves[i]
                let suggestedsquare1 = Square.at(row + combination[0], col + combination[1])

                if (suggestedsquare1.isPossibleSquare()){
                    output.push(suggestedsquare1)
                }
            }
        
        return output

}}
