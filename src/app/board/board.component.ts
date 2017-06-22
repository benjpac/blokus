import { BoardService } from './../shared/board.service';

import { Component, OnInit, Input } from '@angular/core';

import { Cell } from '../shared/cell.model'
import { Piece } from './../shared/piece.model';


@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
  providers: [BoardService]
})
export class BoardComponent implements OnInit {
  @Input() boardSize: number;
  @Input() player: string;
  board: any[] = []
  pieces: Piece[] = []
  activeCells: Cell[] = []
  boards;
  constructor(private boardService: BoardService) { }


    // coords.forEach((xy) => {
    //
    // })
  // }

  // displayPieces() {
  //   var coords: any[] = []
  //   this.pieces.forEach((piece) => {
  //     piece.cells.forEach((cell) => {
  //       var xCoord = piece.centerX + cell.x
  //       var yCoord = piece.centerY + cell.y
  //       this.board[yCoord][xCoord].player = this.player
  //       this.board[yCoord][xCoord].pieceKey = piece.key()
  //     })
  //   })
  // }


  // moveRight() {
  //   this.pieceService.moveRight(this.pieces[this.pieces.length - 1])
  // }

  ngOnInit() {
    var boardKey = this.boards.push(this.board).key
    for (var i = 0; i < this.boardSize; i++) {
      var row = []
      for (var j = 0; j < this.boardSize; j++) {
        row.push(new Cell(j, i, null))
      }
      this.board.push(row)
    }


    // this.displayPieces(){}
    // if (this.player != "All") { // test if board is individual or shared.
    //   this.pieces = this.pieceService.initializePieces()
    //   var coords: any[] = []
    //   this.pieces.forEach((piece) => {
    //     piece.cells.forEach((cell) => {
    //       var xCoord = piece.centerX + cell.x
    //       var yCoord = piece.centerY + cell.y
    //       coords.push([xCoord, yCoord])
    //     })
    //   })

    //   coords.forEach((xy) => {
    //   this.board[xy[1]][xy[0]].player = this.player
    //   })
    // } //end if


    if (this.player != "All") {
      this.pieces = this.boardService.initializePieces(boardKey)
      this.boardService.displayPieces(boardKey)
    }
  }

  playTest(cell){
    if(cell == 'Ben'){
      return 'blue'
    }
  }
}
