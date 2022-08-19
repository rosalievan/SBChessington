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

        let size = GameSettings.BOARD_SIZE
        let pawnoptions =  [[1, 1, Player.WHITE], [6, -1, Player.BLACK]]


        for (let i in pawnoptions){
            let k = pawnoptions[i]

            if (this.player == k[2]) { 
                for (let j = 0; j < size; j++)
                {
                    let newrow = row + k[1]
                    
                    if (row == k[0]){

                        if(board.checkIfEmpty(newrow, col)){
                            output.push(Square.at(newrow, col));
                        }
                        if(board.checkIfEmpty(newrow, col) && board.checkIfEmpty(newrow + k[1], col)){ 
                            output.push(Square.at(newrow + k[1], col));
                        }
                        break

                    } else {
                        if (board.checkIfEmpty(newrow, col)) {

                            output.push(Square.at(newrow, col));

                    }   break
                    
        }}}}

        // 'can move diagonally if there is a piece to take'

        let pawnoptions2 =  [ [[1, -1], 1, Player.WHITE], [[1, -1], -1, Player.BLACK]]

        for (let i in pawnoptions2){
            if (this.player == pawnoptions2[i][2]){

                for (let j in pawnoptions2[i][0]){
                    let suggestedsquare = Square.at(row + pawnoptions2[i][1] , col + pawnoptions2[i][0][j])
                    // would be nice to rewrite checkIfEmpty to be more succinct, now its a repetition of the coordinates
                    if (!(board.checkIfEmpty(row + pawnoptions2[i][1] , col + pawnoptions2[i][0][j])) && board.getPiece(suggestedsquare).player != pawnoptions2[i][2]) {
                        
                        output.push(suggestedsquare)
                    }
                }
            }

            // let suggestedsquare2 = Square.at(row+1, col - 1)
            // if (!(board.checkIfEmpty(row + 1, col - 1)) && board.getPiece(suggestedsquare2).player != Player.WHITE) {
            //     output.push(suggestedsquare2)
            // }
        }

        return output


    
}}
