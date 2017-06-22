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
  board: any//FirebaseObjectObservable<any>;
  pieces: Piece[] = []
  activeCells: Cell[] = []


  constructor(private boardService: BoardService, public database: AngularFireDatabase) { }

  getBoard(boardKey) {
    this.database.object('/boards/' + boardKey).subscribe(temp => {
      this.board = temp.rows

    })
  }

  ngOnInit() {
    var boardKey = this.boardService.makeBoard(this.boardSize, this.player)

    if (this.player != "All") {

      this.pieces = this.boardService.initializePieces(boardKey)
    }

    this.boardService.displayPieces(boardKey, this.player)
    this.getBoard(boardKey)
  }

  clicker;
  yell(event){
    this.clicker = event.srcElement.attributes.class.value;
    // if(event.srcElement.attributes.class.value == 'blue'){
    //   this.clicker = 'blue'
    // } else if(event.srcElement.attributes.class.value == 'none'){
    //   event.srcElement.attributes.class.value = 'blue'
    // }
    console.log(this.clicker)
    console.log(event.srcElement.attributes.class.value)
  }

  playTest(cell){
    if(cell == 'Ben'){
      return 'blue'
    } else {
      return 'none'
    }
  }

  findStuff(cell){
    if(cell.player)
    {
      var player = cell.player;
      var piece = cell.pieceKey;
      return player +" "+ piece;
    }    
  }
}
