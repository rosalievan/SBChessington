import Player from '../player';
import Square from '../square';
import Piece from './piece';
import GameSettings from '../../engine/gameSettings';

export default class Queen extends Piece {
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
                    } 
                    else if(board.getPiece(suggestedsquare1).player != this.player && board.getPiece(suggestedsquare1).name != "King"){
                        output.push(suggestedsquare1)
                        break
                    }
                    else {
                        break
                    }
                }
            }
        }

        let size = GameSettings.BOARD_SIZE
        let multipliers = [[1, 1], [1, -1], [-1, -1], [-1,1]]

        for (let j in multipliers){
            for (let i = 1; i < size; i++) {
                
                let suggestedsquare = Square.at(row + i * multipliers[j][0], col + i * multipliers[j][1])
                    if (suggestedsquare.isPossibleSquare()){
                        if(board.checkIfEmpty(suggestedsquare)){
                            output.push(suggestedsquare)
                        }
                        else if(board.getPiece(suggestedsquare).player != this.player && board.getPiece(suggestedsquare).name != "King"){
                            output.push(suggestedsquare)
                            break
                        }

                        else {
                            break
                        }
                }
            }
        }
        console.log(output)
        return output
    } 

}
