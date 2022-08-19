import Player from '../player';
import Square from '../square';
import Piece from './piece';
import GameSettings from '../../engine/gameSettings';
import King from './king';

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }

    
    getAvailableMoves(board) {
        let location = board.findPiece(this);
        let row=location.row;
        let col=location.col;
        let output = new Set();

        let parameteroptions = {
            white : {
                startcolumn : 1,
                normalmoveforward : 1,
                finalrow : 7,
                diagonalmoveforward: [1, -1],
                playername: Player.WHITE
            },
            black : {
                startcolumn: 6,
                normalmoveforward: -1,
                finalrow: 0,
                diagonalmoveforward: [1, -1],
                playername: Player.BLACK
            }
        }

        let parameters = parameteroptions.white
        if (this.player == Player.BLACK){
            parameters = parameteroptions.black
        }

        // 'can move one or two squares up on their first move'

        let newrow = row + parameters.normalmoveforward
        let suggestedsquare1 = Square.at(newrow,  col)
        let suggestedsquare2 = Square.at(newrow + parameters.normalmoveforward, col)

        if (row != parameters.finalrow){
            if(board.checkIfEmpty(suggestedsquare1)) {
                output.add(suggestedsquare1)

                if (row == parameters.startcolumn && board.checkIfEmpty(suggestedsquare2)){ 
                    output.add(suggestedsquare2);} 
                }
         
        // 'can move diagonally if there is a piece to take' & cannot take the king

            for (let i in parameters.diagonalmoveforward){

                let suggestedsquare3 = Square.at(newrow , col + parameters.diagonalmoveforward[i])

                if (!(board.checkIfEmpty(suggestedsquare3)) && 
                    board.getPiece(suggestedsquare3).player != parameters.playername && 
                    board.getPiece(suggestedsquare3).name != "King") {
                    output.add(suggestedsquare3)
                }
            }
        }
            
        output = Array.from(output)
        return output
}}
