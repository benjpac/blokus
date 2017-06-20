import { Component, OnInit } from '@angular/core';

import { Cell } from '../shared/cell.model'

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  boardSize: number = 20
  board = []
  constructor() { }

  ngOnInit() {
    for (var i = 0; i < this.boardSize; i++) {
      var row = []
      for (var j = 0; j < this.boardSize; j++) {
        row.push(new Cell(i, j, null))       
      }
      this.board.push(row)
    }
  }

  
}
