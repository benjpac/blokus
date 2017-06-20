import { Component, OnInit } from '@angular/core';

import { Cell } from '../shared/cell.model'
import { Piece } from './../shared/piece.model';
import { PieceService } from './../shared/piece.service';


@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
  providers: [PieceService]
})
export class BoardComponent implements OnInit {
  boardSize: number = 20
  board = []
  pieces: Piece[] = []
  activeCells: Cell[] = []
  constructor(private pieceService: PieceService) { }

  ngOnInit() {
    for (var i = 0; i < this.boardSize; i++) {
      var row = []
      for (var j = 0; j < this.boardSize; j++) {
        row.push(new Cell(i, j, null))       
      }
      this.board.push(row)
    }

    this.pieces = this.pieceService.initializePieces()
    var coords: any[] = []
    this.pieces.forEach((piece) => {
      piece.cells.forEach((cell) => {
        var xCoord = piece.centerX + cell.x
        var yCoord = piece.centerY + cell.y
        coords.push([xCoord, yCoord])
      })
    })

    coords.forEach((xy) => {
      this.board[xy[0]][xy[1]].player = "Ben"
      debugger
    })
  } 
}
