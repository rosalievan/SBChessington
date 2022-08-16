import Player from '../player';
import Square from '../square';
import Piece from './piece';
import GameSettings from '../../engine/gameSettings';

export default class Bishop extends Piece {
    constructor(player) {
        super(player);
    }

       getAvailableMoves(board) {
            let location = board.findPiece(this);
            let moves=[];

            for (let i = 1; i < GameSettings.BOARD_SIZE; i++) {
                if((location.row +i < 8) && (location.col - i >=0)){
                    moves.push(Square.at(location.row + i, location.col - i));
                }
                if((location.row - i >= 0) && (location.col + i < 8)){ 
                    moves.push(Square.at(location.row - i, location.col + i));
                }
                if((location.row - i >= 0) && (location.col - i >=0)){
                    moves.push(Square.at(location.row - i, location.col - i));
                }
                if((location.row + i <8 ) && (location.col + i < 8)){
                    moves.push(Square.at(location.row + i, location.col + i));
                }
            }
            
            return moves;
        } 
    
    }
    