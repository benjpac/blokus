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
  piecesArray: Piece[] = []
  

  constructor(public database: AngularFireDatabase) {
  this.boards = database.list('boards'); //   preserve snapshot allows board.key to work in display pieces
  }

  initializePieces(boardID): Piece[] {
    var pieces: FirebaseListObservable<any[]> = this.database.list('/boards/' + boardID + '/pieces/')
    PIECES.forEach((piece) => {
      pieces.push(piece);
    })
    return PIECES;
  }

  makeBoard(boardSize: number, boardPlayer) {
    var rowsArray = []
    for (var y = 0; y < boardSize; y++) {
      var cellsArray = []
      for (var x = 0; x < boardSize; x++) {
        var newCell = new Cell (x, y);
        cellsArray.push(newCell)
      }
      var newRow = new Row (y, cellsArray);
      rowsArray.push(newRow)
    }
    var newBoard = new Board(rowsArray);
    var boardID = this.boards.push(newBoard).key;
    return boardID;
  }

  displayPieces(boardKey, player) {
    var coords: any[] = [];

    var board = this.database.object('/boards/' + boardKey) // SO EASY. use the board key in the url to grab the board you want.
    board.subscribe(snapshot => {
      var pieces = snapshot.pieces
      for (let pieceKey in pieces) {
        this.movePiece(boardKey, pieceKey, "this.moveRight")
        var piece = pieces[pieceKey]
         piece.cells.forEach(cell => {
          var xCoord = piece.centerX + cell.x;
          var yCoord = piece.centerY + cell.y;
          coords.push([yCoord, xCoord, pieceKey])
        });
       }
    })  
    console.log(coords)
    coords.forEach(cell => {
      this.database.object('/boards/' + boardKey + "/rows/" + cell[0] + "/cells/" + cell[1]).update({ pieceKey: cell[2], player: player })
      // console.log(this.database.object('/boards/' + boardKey + "/rows/" + set[1] + "/cells/" + set[0]))
    })
    this.database.object('/boards/' + boardKey).subscribe(snapshot => { return snapshot }) 
  }

  movePiece(boardKey, pieceKey, callback) {
    this.database.object('/boards/' + boardKey + "/pieces/" + pieceKey).subscribe(temp => {
      console.log(callback);      
      var piece = callback(temp)
      // this.database.object('/boards/' + boardKey + "/pieces/" +  pieceKey).update({ board: piece.board, player: piece.player, centerX: piece.centerX, centerY: piece.centerY, active: piece.active, cells: piece.cells, })
    })
  }

  wipeDatabase() {
    debugger
    this.database.list('/boards/').remove()
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
    return piece
  }

  flipV(piece: Piece) {
    piece.cells.forEach((cell) => {
      cell.y = -cell.y
    })
    if (this.testOffBoard(piece)) {
      this.flipV(piece)
    }
    return piece
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
    return piece
  }

  moveLeft(piece: Piece) {
    piece.centerX -= 1
    if (this.testOffBoard(piece)) {
      this.moveRight(piece)
    }
    return piece
  }

  moveRight(piece: Piece) {
    piece.centerX += 1
    if (this.testOffBoard(piece)) {
      this.moveLeft(piece)
    }
    return piece
  }

  moveUp(piece: Piece) {
    piece.centerY -= 1
    if (this.testOffBoard(piece)) {
      this.moveDown(piece)
    }
    return piece
  }

  moveDown(piece: Piece) {
    piece.centerY += 1
    if (this.testOffBoard(piece)) {
      this.moveUp(piece)
    }
    return piece
  }
}
