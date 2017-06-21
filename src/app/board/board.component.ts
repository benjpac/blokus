import { Component, OnInit, Input } from '@angular/core';
import { AngularDraggableModule } from 'angular2-draggable';
import { Cell } from '../shared/cell.model'
import { Piece } from './../shared/piece.model';
import { PieceService } from './../shared/piece.service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
  providers: [PieceService]
})
export class BoardComponent implements OnInit {
  @Input() boardSize: number;
  @Input() player: string;
  board = []
  pieces: Piece[] = []
  activeCells: Cell[] = []
  constructor(private pieceService: PieceService) { }

  displayPieces() {
    var coords: any[] = []
    this.pieces.forEach((piece) => {
      piece.cells.forEach((cell) => {
        var xCoord = piece.centerX + cell.x
        var yCoord = piece.centerY + cell.y
        coords.push([xCoord, yCoord])
      })
    })

    coords.forEach((xy) => {
      this.board[xy[1]][xy[0]].player = this.player
    })
  }

  moveRight() {
    this.pieceService.moveRight(this.pieces[this.pieces.length - 1])
  }

  ngOnInit() {
    for (var i = 0; i < this.boardSize; i++) {
      var row = []
      for (var j = 0; j < this.boardSize; j++) {
        row.push(new Cell(j, i, null))
      }
      this.board.push(row)
    }

    this.displayPieces();
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
      console.log("initializedPieces")
      this.pieces = this.pieceService.initializePieces()
      this.displayPieces()
    }
  }

  playTest(cell){
    if(cell == 'Ben'){
      return 'blue'
    }
  }
}
