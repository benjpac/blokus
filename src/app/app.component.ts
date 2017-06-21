
import { AngularDraggableModule } from 'angular2-draggable';
import { User } from './user.model'
// database
import { AngularFireModule } from 'angularfire2';
import { FirebaseListObservable } from 'angularfire2/database';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { AngularFireDatabase} from 'angularfire2/database';
import * as firebase from 'firebase/app';
// auth
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from './auth.service';
import { PieceService } from './shared/piece.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    AuthService,
    PieceService
  ]
})
export class AppComponent {
  constructor(private authService: AuthService, private pieceService: PieceService) {
   }

  personalSize = 17;
  mainSize = 20
  Ben = "Ben"
  All = "All"
  login = false;

  onLogin(status) {
    this.login = status;
  }

  // ngOnInit() {}
}
