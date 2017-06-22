
import { BoardService } from './board.service';


import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database';
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


  testOffBoard(piece) {
    piece.cells.forEach((cell) => {
      if (cell.x < 0 || cell.y < 0 || cell.x > 19 || cell.y > 19) {
        return true
      }
    })
    return false
  }

  flipH(piece: Piece) {
    piece.cells.forEach((cell) => {
      cell.x = -cell.x
    })
    if (this.testOffBoard(piece)) {
      this.flipH(piece)
    }
  }

  flipV(piece: Piece) {
    piece.cells.forEach((cell) => {
      cell.y = -cell.y
    })
    if (this.testOffBoard(piece)) {
      this.flipV(piece)
    }
  }

  rotClock(piece: Piece) {
    piece.cells.forEach((cell) => {
      var tempX = cell.x
      cell.x = cell.y
      cell.y = -tempX
    })
    if (this.testOffBoard(piece)) {
      this.rotCounterClock(piece)
    }
  }

  rotCounterClock(piece: Piece) {
    piece.cells.forEach((cell) => {
      var tempX = cell.x
      cell.x = -cell.y
      cell.y = tempX
    })
    if (this.testOffBoard(piece)) {
      this.rotClock(piece)
    }
  }

  moveLeft(piece: Piece) {
    piece.centerX -= 1
    if (this.testOffBoard(piece)) {
      this.moveRight(piece)
    }
  }

  moveRight(piece: Piece) {
    console.log(piece)
    piece.centerX += 1

    if (this.testOffBoard(piece)) {
      this.moveLeft(piece)
    }
  }

  moveUp(piece: Piece) {
    piece.centerY -= 1
    if (this.testOffBoard(piece)) {
      this.moveDown(piece)
    }
  }

  moveDown(piece: Piece) {
    piece.centerY += 1
    if (this.testOffBoard(piece)) {
      this.moveUp(piece)
    }
  }

}
