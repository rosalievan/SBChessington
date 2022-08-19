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

        // 'can move one or two squares up on their first move'
        // pawnoptions structure: [startcolumn, moveforward, player, finalrow ]
        // interfacing -> define an interface (only in typescript)

        let pawnoptions = {
            white : {
                startcolumn : 1,
                moveforward : 1,
                finalrow : 7
            },
            black : {
                startcolumn: 6,
                moveforward: -1,
                finalrow: 0
            }
        }

        let parameters
        if (this.player == Player.BLACK){
            parameters = pawnoptions.black
        } else { 
            parameters = pawnoptions.white}

 

        let newrow = row + parameters.moveforward
        let suggestedsquare1 = Square.at(newrow,  col)
        let suggestedsquare2 = Square.at(newrow + parameters.moveforward, col)
        
        if (row == parameters.startcolumn && board.checkIfEmpty(suggestedsquare1) && board.checkIfEmpty(suggestedsquare2)){ 
            output.add(suggestedsquare1)
            output.add(suggestedsquare2);} 

        else if ( board.checkIfEmpty(suggestedsquare1)){
            output.add(suggestedsquare1);
            }
                    
        

        // 'can move diagonally if there is a piece to take'

        let pawnoptions2 =  [ [[1, -1], 1, Player.WHITE], [[1, -1], -1, Player.BLACK]]

        for (let i in pawnoptions2){
            if (this.player == pawnoptions2[i][2]){

                for (let j in pawnoptions2[i][0]){
                    let suggestedsquare = Square.at(row + pawnoptions2[i][1] , col + pawnoptions2[i][0][j])

                    if (!(board.checkIfEmpty(suggestedsquare)) && board.getPiece(suggestedsquare).player != pawnoptions2[i][2]) {
                        output.add(suggestedsquare)
                    }
                }
            }
        }
        output = Array.from(output)
        return output
}}
