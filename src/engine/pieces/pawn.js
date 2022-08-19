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
        let output = new Set();
        let size = GameSettings.BOARD_SIZE

        // 'can move one or two squares up on their first move'
        // pawnoptions structure: [startcolumn, moveforward, player, finalrow ]
        let pawnoptions =  [[1, 1, Player.WHITE, 7], [6, -1, Player.BLACK, 0]]

        for (let i in pawnoptions){
            let k = pawnoptions[i]

            if (this.player == k[2]) { 

                let newrow = row + k[1]
                
                if (row == k[0] && board.checkIfEmpty(newrow, col) && board.checkIfEmpty(newrow + k[1], col)){ 
                    output.add(Square.at(newrow, col))
                    output.add(Square.at(newrow + k[1], col));} 

                else if ( newrow != k[3] && board.checkIfEmpty(newrow, col)){
                        output.add(Square.at(newrow, col));
                    }
                    
        }}

        // 'can move diagonally if there is a piece to take'

        let pawnoptions2 =  [ [[1, -1], 1, Player.WHITE], [[1, -1], -1, Player.BLACK]]

        for (let i in pawnoptions2){
            if (this.player == pawnoptions2[i][2]){

                for (let j in pawnoptions2[i][0]){
                    let suggestedsquare = Square.at(row + pawnoptions2[i][1] , col + pawnoptions2[i][0][j])

                    // would be nice to rewrite checkIfEmpty to be more succinct, now its a repetition of the coordinates
                    if (!(board.checkIfEmpty(row + pawnoptions2[i][1] , col + pawnoptions2[i][0][j])) && board.getPiece(suggestedsquare).player != pawnoptions2[i][2]) {
                        output.add(suggestedsquare)
                    }
                }
            }
        }
        output = Array.from(output)
        return output
}}
