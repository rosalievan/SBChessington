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
                for (let j = 0; j < size; j++) {
                    

                    if (location.row == k[0]){
                        console.log('x')
                        if(board.checkIfEmpty(row + k[1], col)){
                            console.log('o')
                            output.push(Square.at(row + k[1], col));
                        }
                        if(board.checkIfEmpty(row + k[1], col) && board.checkIfEmpty(row + 2 * k[1], col)){ 
                            output.push(Square.at(row + 2 * k[1], col));
                        }
                        return output

                    } else {
                        if (board.checkIfEmpty(row + k[1], col)) {
                            output.push(Square.at(row + k[1], col));
                    }   return output
                    
        }}}}


    
}}
