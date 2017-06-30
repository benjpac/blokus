import { BoardService } from './../shared/board.service';

import { AngularFireDatabase, FirebaseListObservable,FirebaseObjectObservable } from 'angularfire2/database';

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
  board: any
  boardKey: string
  pieces: Piece[] = []
  activeCells: Cell[] = []
  clickedPieceKey: string;
  clickedPiece: Piece;

  constructor(private boardService: BoardService, public database: AngularFireDatabase) { }

  getBoard(boardKey) {
    this.database.object('/boards/' + boardKey).subscribe(temp => {
      this.board = temp.rows
    })
  }

  wipeDatabase() {
    this.boardService.wipeDatabase()
  }

  ngOnInit() {
    this.boardKey = this.boardService.makeBoard(this.boardSize, this.player)

    if (this.player != "All") {

      this.pieces = this.boardService.initializePieces(this.boardKey)
    }

    this.boardService.displayPieces(this.boardKey, this.player)
    this.getBoard(this.boardKey)
  }

  
  getPieceID(event){
    var string = event.srcElement.attributes.class.value;
    console.log(string)
    this.clickedPieceKey = string.substring(string.indexOf("-"))
    console.log(this.clickedPieceKey)
  }

  moveRight() {
    this.boardService.movePiece(this.boardKey, this.clickedPieceKey)
  }

  playTest(cell){
    if(cell == 'Ben'){
      return 'blue'
    } else {
      return 'none'
    }
  }

  concatClass(cell){
    if(cell.player)
    {
      var player = cell.player;
      var pieceKey = cell.pieceKey;
      return player + " " + pieceKey;
    }    
  }
}
