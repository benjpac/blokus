import { Component, OnInit, Input } from '@angular/core';

import { Cell } from '../shared/cell.model'
import { Piece } from './../shared/piece.model';
import { PieceService } from './../shared/piece.service';

// import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
  providers: [PieceService]
})
export class BoardComponent implements OnInit {
  @Input() boardSize: number;
  @Input() player: string;
  boards: FirebaseListObservable<any[]>;
  board: any[] = []
  pieces: FirebaseListObservable<any[]>;
  activeCells: Cell[] = []
  constructor(private pieceService: PieceService) { }

  displayPieces() {
    var coords: any[] = []
    this.pieces.forEach((piece) => {
      piece.cells.forEach((cell) => {
        var xCoord = piece.centerX + cell.x
        var yCoord = piece.centerY + cell.y
        this.board[yCoord][xCoord].player = this.player
        this.board[yCoord][xCoord].pieceKey = piece.key()
      })
    })

    coords.forEach((xy) => {
      
    })
  }

  moveRight() {
    this.pieceService.moveRight(this.pieces[this.pieces.length - 1])
  }

  ngOnInit() {
    var boardKey = this.boards.push(this.board).key
    for (var i = 0; i < this.boardSize; i++) {
      var row = []
      for (var j = 0; j < this.boardSize; j++) {
        row.push(new Cell(j, i, null))       
      }
      this.board.push(row)
    }

    

    if (this.player != "All") {
      console.log("initializedPieces")
      this.pieces = this.pieceService.initializePieces()
      this.displayPieces()
    }
  } 
}

