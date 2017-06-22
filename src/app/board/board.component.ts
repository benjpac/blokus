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
 
  ngOnInit() {
    var boardKey = this.boardService.makeBoard(20, "Ben")

    if (this.player != "All") {
      this.pieces = this.boardService.initializePieces(boardKey)
      this.boardService.displayPieces(boardKey, this.player)
    }
  }

  playTest(cell){
    if(cell == 'Ben'){
      return 'blue'
    }
  }
}
