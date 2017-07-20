import { BoardService } from './../shared/board.service';

import { AngularFireDatabase, FirebaseListObservable,FirebaseObjectObservable } from 'angularfire2/database';

import { Component, OnInit, Input } from '@angular/core';

import { Cell } from '../shared/cell.model';
import { Piece } from './../shared/piece.model';
import { Board } from './../shared/board.model';
import { Game } from './../shared/game.model';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
  providers: [BoardService]
})
export class BoardComponent implements OnInit {
  @Input() boardSize: number;
  @Input() player: string;
  @Input() gameKey: string;
  board: Board
  boardKey: string
  pieces: Piece[] = []
  activeCells: Cell[] = []
  // clickedPieceKey: string;
  // clickedPiece: Piece;

  constructor(private boardService: BoardService, public database: AngularFireDatabase) { }

  getBoard(boardKey) {
    this.database.object('/boards/' + boardKey).subscribe(temp => {
      this.board = temp.rows
    })
  }

  getGame() {
    return this.database.object('/games/' + this.gameKey)
  }

  ngOnInit() {
    this.boardKey = this.boardService.makeBoard(this.boardSize, this.player)

    var boardKeys: FirebaseListObservable<string[]> = this.database.list(('/games/' + this.gameKey + '/boardKeys/'))
    boardKeys.push(this.boardKey)
    
    if (this.player != "All") {
      this.pieces = this.boardService.initializePieces(this.boardKey, this.player)
      this.boardService.displayPieces(this.boardKey, this.player)
    } else {
      var game = this.getGame() 
      game.update({ sharedBoardKey: this.boardKey })
    }

    this.getBoard(this.boardKey)
  }

  switchBoard(event){
    var string = event.srcElement.attributes.class.value;
    var pieceKey = string.substring(string.indexOf("-"))

    var piece = this.database.object('/boards/' + this.boardKey + "/pieces/" + pieceKey)
    piece.update({active: true, centerX: 10, centerY: 10})
    var game = this.getGame()
    
    game.take(1).subscribe(game => {
      var piecesTo: FirebaseListObservable<any> = this.database.list('/boards/' + game.sharedBoardKey + "/pieces/" )
      console.log("shared board key: " + game.sharedBoardKey + " this.boardKey: " + this.boardKey)
      piecesTo.push(piece)
    })
    
    
    var piecesFrom: FirebaseListObservable<any> = this.database.list('/boards/' + this.boardKey + "/pieces/" )
    piecesFrom.remove(pieceKey)
  }

  movePiece(callback: () => void) {
    this.boardService.movePiece(this.boardKey, callback)
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
