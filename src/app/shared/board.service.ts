import { AngularFireDatabase, FirebaseListObservable,FirebaseObjectObservable } from 'angularfire2/database';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/take'

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
  }

  initializePieces(boardID, player) {
    var pieces: FirebaseListObservable<any[]> = this.database.list('/boards/' + boardID + '/pieces/')
    PIECES.forEach((piece) => {
      piece.player = player
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
    var board = this.database.object('/boards/' + boardKey).take(1) 
    board.subscribe(snapshot => {
      var pieces = snapshot.pieces
      for (let pieceKey in pieces) {
        var piece = pieces[pieceKey]
        piece.cells.forEach(cell => {
          var xCoord = piece.centerX + cell.x;
          var yCoord = piece.centerY + cell.y;
          coords.push([yCoord, xCoord, pieceKey, player])
        });
       }
    })  
    this.drawCellsAsPiece(boardKey, coords)
  }

  drawCellsAsPiece(boardKey, coordsArray) {
    coordsArray.forEach(cell => {
      var selectedCell: FirebaseObjectObservable<any> = this.database.object('/boards/' + boardKey + "/rows/" + cell[0] + "/cells/" + cell[1])
      selectedCell.update({ pieceKey: cell[2], player: cell[3] })
    })
  }

  clearCells(boardKey, coordsArray) {
    coordsArray.forEach(cell => {
      var selectedCell: FirebaseObjectObservable<any> = this.database.object('/boards/' + boardKey + "/rows/" + cell[0] + "/cells/" + cell[1])
      selectedCell.update({ pieceKey: "", player: "" })
    })
  }

  movePiece(boardKey: string, pieceKey: string, callback: () => any ) {
    var player: any
    this.database.object('/boards/' + boardKey + "/pieces/" + pieceKey).take(1).subscribe(oldPiece => {
      
      // gather up coordinates of old piece
      var oldCoords = []
      oldPiece.cells.forEach(cell => {
        var xCoord = oldPiece.centerX + cell.x;
        var yCoord = oldPiece.centerY + cell.y;
        oldCoords.push([yCoord, xCoord])
      });
      // wipe them on the board
      this.clearCells(boardKey, oldCoords)

      var newCoords = []
      player = oldPiece.player

      // Gather cells of new piece
      var newPiece = this.moveRight(oldPiece)
      newPiece.cells.forEach(cell => {
        var xCoord = newPiece.centerX + cell.x;
        var yCoord = newPiece.centerY + cell.y;
        newCoords.push([yCoord, xCoord, pieceKey, player])
      });

      // Redraw cells
      this.drawCellsAsPiece(boardKey, newCoords)

      var fbPiece: FirebaseObjectObservable<any> = this.database.object('/boards/' + boardKey + "/pieces/" +  pieceKey)
      fbPiece.update({ 
                       centerX: newPiece.centerX, 
                       centerY: newPiece.centerY, 

      });
    });

    // this.displayPieces(boardKey, player)
  }
  testOffBoard(piece) {
    return function(cell, index, array) {
      return (piece.centerX + cell.x < 0 || piece.centerY + cell.y < 0 || piece.centerX + cell.x > 19 || piece.centerY + cell.y > 19)
    }
  }

  testMove(piece) {
    if (piece.cells.some(this.testOffBoard(piece))) {
      return true
      // alert - piece off board
    }
  }

  flipH(piece: Piece) {
    piece.cells.forEach((cell) => {
      cell.x = -cell.x
    })
    if (this.testMove(piece)) {
      this.flipH(piece)
    }
    return piece
  }

  flipV(piece: Piece) {
    piece.cells.forEach((cell) => {
      cell.y = -cell.y
    })
    if (this.testMove(piece)) {
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
    if (this.testMove(piece)) {
      this.rotCounterClock(piece)
    }
  }
  
  rotCounterClock(piece: Piece) {
    piece.cells.forEach((cell) => {
      var tempX = cell.x
      cell.x = -cell.y
      cell.y = tempX
    })
    if (this.testMove(piece)) {
      this.rotClock(piece)
    }
    return piece
  }

  moveLeft(piece: Piece) {
    piece.centerX -= 1
    if (this.testMove(piece)) {
      this.moveRight(piece)
    }
    return piece
  }

  moveRight(piece: Piece) {
    piece.centerX += 1
    if (this.testMove(piece)) {
      this.moveLeft(piece)
    }
    return piece
  }

  moveUp(piece: Piece) {
    piece.centerY -= 1
    if (this.testMove(piece)) {
      this.moveDown(piece)
    }
    return piece
  }

  moveDown(piece: Piece) {
    piece.centerY += 1
    if (this.testMove(piece)) {
      this.moveUp(piece)
    }
    return piece
  }
}
