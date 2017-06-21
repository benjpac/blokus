import { BoardService } from './board.service';

import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

import { Piece } from './piece.model'
import { PIECES } from './pieces-seed'

@Injectable()
export class PieceService {
  // pieces: FirebaseListObservable<any[]>;

  // constructor() {
  //   this.pieces = database.list('pieces');
  // }

  // initializePieces(): Piece[] {
  //   PIECES.forEach((piece) => {
  //     this.pieces.push(piece)
  //   })
  //   return PIECES;
  // }

  // displayPieces(pieces, board, player) {
  //   var coords: any[] = []
  //   pieces.forEach((piece) => {
  //     piece.cells.forEach((cell) => {
  //       var xCoord = piece.centerX + cell.x
  //       var yCoord = piece.centerY + cell.y
  //       coords.push([xCoord, yCoord])
  //     })
  //   })

  //   coords.forEach((xy) => {
  //     board[xy[1]][xy[0]].player = player
  //   })
  //   return coords
  // }

  
}
