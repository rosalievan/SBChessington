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

        let move1 = [2, -2];
        let move2 = [1, -1];

        for (let i in move2){
            for (let j in move1){
                if ((row + move2[i] < 8 )&& (row +move2[i] >= 0) && (col + move1[j] < 8) && (col +move1[j] >=0)){
                output.push(Square.at(row + move2[i], col + move1[j]))}
                if ((row + move1[j] < 8 ) && (row +move1[j] >= 0) && (col + move2[i]< 8) && (col +move2[i] >=0)){
                output.push(Square.at(row + move1[j], col + move2[i]))}
            }
        }

        return output
         
    }
}
