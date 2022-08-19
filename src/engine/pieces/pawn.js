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
        // interfacing -> define an interface (only in typescript)

        // let pawnoptions = {
        //     white : {
        //         startcolumn : 1,
        //         moveforward : 1,
        //         playername : Player.White,
        //         finalrow : 7
        //     }
        // }

        // or create a function that takes in the relvant options, nested in an if statement that checks what player it is and passes through those parameters

        
        let pawnoptions =  [[1, 1, Player.WHITE, 7], [6, -1, Player.BLACK, 0]]
        console.log(row)
        for (let i in pawnoptions){
            let k = pawnoptions[i]

            if (this.player == k[2]) { 

                let newrow = row + k[1]
                let suggestedsquare1 = Square.at(newrow,  col)
                let suggestedsquare2 = Square.at(newrow + k[1], col)
                
                if (row == k[0] && board.checkIfEmpty(suggestedsquare1) && board.checkIfEmpty(suggestedsquare2)){ 
                    output.add(suggestedsquare1)
                    output.add(suggestedsquare2);} 

                else if ( board.checkIfEmpty(suggestedsquare1)){
                    output.add(suggestedsquare1);
                    }
                    
        }}

        // 'can move diagonally if there is a piece to take'

        let pawnoptions2 =  [ [[1, -1], 1, Player.WHITE], [[1, -1], -1, Player.BLACK]]

        for (let i in pawnoptions2){
            if (this.player == pawnoptions2[i][2]){

                for (let j in pawnoptions2[i][0]){
                    let suggestedsquare = Square.at(row + pawnoptions2[i][1] , col + pawnoptions2[i][0][j])

                    // would be nice to rewrite checkIfEmpty to be more succinct, now its a repetition of the coordinates
                    if (!(board.checkIfEmpty(suggestedsquare)) && board.getPiece(suggestedsquare).player != pawnoptions2[i][2]) {
                        output.add(suggestedsquare)
                    }
                }
            }
        }
        output = Array.from(output)
        return output
}}
