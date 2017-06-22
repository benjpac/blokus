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

  constructor(private boardService: BoardService) { }

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
    // var boardKey = this.boards.push(this.board).key
    // console.log(boardKey)
    // var cells: FirebaseListObservable<any[]> = this.database.list('/boards/' + boardKey + '/cells/')
    // for (var i = 0; i < this.boardSize; i++) {
    //   var row = []
    //   for (var j = 0; j < this.boardSize; j++) {
    //     row.push(new Cell(j, i, null))
    //   }
    //   console.log(row)
    //   this.board.push(row)
    // }

    var boardKey = this.boardService.makeBoard(20, "Ben")

    if (this.player != "All") {
      this.pieces = this.boardService.initializePieces()
      this.boardService.displayPieces(boardKey)
    }
  }

  playTest(cell){
    if(cell == 'Ben'){
      return 'blue'
    }
  }
}
