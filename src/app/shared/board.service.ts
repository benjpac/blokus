import { AngularFireDatabase, FirebaseListObservable,FirebaseObjectObservable } from 'angularfire2/database';

import { Injectable } from '@angular/core';

import { Cell } from './cell.model'
import { Row } from './row.model'
import { Board } from './board.model'
import { Piece } from './piece.model'

import { PIECES } from './pieces-seed'


@Injectable()
export class BoardService {
  boards: FirebaseListObservable<any[]>;
  pieces: FirebaseListObservable<any[]>;

  constructor(public database: AngularFireDatabase) {
    this.boards = database.list('boards');
    this.pieces = database.list('pieces');
  }

  initializePieces(): Piece[] {
    PIECES.forEach((piece) => {
      this.pieces.push(piece)
    })
    return PIECES;
  }

  makeBoard(boardSize: number, boardPlayer) {
    var newBoard = new Board([]);
    var boardID = this.boards.push(newBoard).key;
    console.log(boardID)
    var rows: FirebaseListObservable<any[]> = this.database.list('/boards/' + boardID + '/rows/')
    for (var y = 0; y < boardSize; y++) {
      var newRow = new Row (y, []);
      var rowID = rows.push(newRow).key;
      console.log(rowID)
      var cells: FirebaseListObservable<any[]> = this.database.list('/boards/' + boardID + '/rows/' + rowID + '/cells/')
      for (var x = 0; x < boardSize; x++) {
        var newCell = new Cell (x, y, boardPlayer);
        cells.push(newCell)
      }
    }
  }

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
