import { Injectable } from '@angular/core';

import { Piece } from './piece.model'
import { PIECES } from './pieces-seed'

@Injectable()
export class PieceService {

  initializePieces(): Promise<Piece[]> {
    return Promise.resolve(PIECES);
  }

  flipH(piece: Piece) {
    piece.cells.forEach(function(cell) {
      cell.x = -cell.x
    })
  }

  flipV(piece: Piece) {
    piece.cells.forEach(function(cell) {
      cell.y = -cell.y
    })
  }

  rotClock(piece: Piece) {
    piece.cells.forEach(function(cell) {
      var tempX = cell.x
      cell.x = cell.y
      cell.y = -tempX
    })
  }
  
  rotCounterClock(piece: Piece) {
    piece.cells.forEach(function(cell) {
      var tempX = cell.x
      cell.x = -cell.y
      cell.y = tempX
    })
  }
}
