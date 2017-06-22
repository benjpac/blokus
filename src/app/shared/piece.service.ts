import { Injectable } from '@angular/core';

import { Piece } from './piece.model'
import { PIECES } from './pieces-seed'

@Injectable()
export class PieceService {
  clicker;
  setClicker(input){
    this.clicker = input;
  }
  // initializePieces(): Promise<Piece[]> {
  //   return Promise.resolve(PIECES);
  // }

  initializePieces(): Piece[] {
    return PIECES;
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

  moveLeft(piece: Piece) {
    piece.centerX = piece.centerX - 1
  }

  moveRight(piece: Piece) {
    piece.centerX = piece.centerX + 1
  }

  moveUp(piece: Piece) {
    piece.centerY = piece.centerY - 1
  }

  moveDown(piece: Piece) {
    piece.centerY = piece.centerY + 1
  }
}
