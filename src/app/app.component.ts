import { PieceService } from './shared/piece.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PieceService]
})
export class AppComponent {  // implements OnInit
  personalSize = 17;
  mainSize = 20
  Ben = "Ben"
  All = "All"

  constructor(private pieceService: PieceService) { }



  // ngOnInit() {}
}
