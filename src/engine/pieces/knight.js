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

        let list0 = [1, -1]
        let list = [2, -2]

        for (let i in list0){
            for (let j in list){
                if ((location.row + list0[i] < 8 )&& (location.row +list0[i] >= 0) && (location.col + list[j] < 8) && (location.col +list[j] >=0)){
                output.push(Square.at(location.row + list0[i], location.col + list[j]))}
                if ((location.row + list[j] < 8 ) && (location.row +list[j] >= 0) && (location.col + list0[i]< 8) && (location.col +list0[i] >=0)){
                output.push(Square.at(location.row + list[j], location.col + list0[i]))}
            }
        }

        return output

            
}}
