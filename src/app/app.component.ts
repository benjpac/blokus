import { User } from './user.model'
// database
import { AngularFireModule } from 'angularfire2';
import { FirebaseListObservable } from 'angularfire2/database';
import { AngularFireDatabase} from 'angularfire2/database';
import * as firebase from 'firebase/app';
// auth
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from './auth.service';
import { Component, OnInit } from '@angular/core';

import { BoardComponent } from './board/board.component';

import { Game } from './shared/game.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

  providers: [AuthService]

})
export class AppComponent implements OnInit {
  constructor(private authService: AuthService, public database: AngularFireDatabase) {
   }

  games: FirebaseListObservable<any>
  gameKey: string
  personalSize: number = 17;
  mainSize: number = 20
  blue: string = "blue"
  red: string = "red"
  yellow: string = "yellow"
  green: string = "green"
  All: string = "All"
  login: boolean = false;

  ngOnInit() {
  }

  onLogin(status) {
    this.login = status;
  }

   wipeDB() {
    var boards: FirebaseListObservable<any> = this.database.list('/boards/')
    this.database.list('/boards/').take(1).subscribe(staticBoards => {
      staticBoards.forEach(board => {
        boards.remove(board)
      });
    })
  }
}
