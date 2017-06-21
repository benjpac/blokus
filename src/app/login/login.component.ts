import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { User } from '../user.model'
// database
import { AngularFireModule } from 'angularfire2';
import { FirebaseListObservable } from 'angularfire2/database';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { AngularFireDatabase} from 'angularfire2/database';
import * as firebase from 'firebase/app';
// auth
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {
  @Output() onLogin = new EventEmitter<boolean>();
  board = null;
  userEmail:string;
  uid:string;
  title = 'app works!';
  currentUser;
  userList: User[];
  // get message
  items: FirebaseListObservable<any>;
  users: FirebaseListObservable<any>;
  // check auth
  name: Observable<firebase.User>;
  constructor(public af: AngularFireAuth, private database: AngularFireDatabase, private authService: AuthService) { }

  ngOnInit() {
  }

  loginWithGoogle(){
    this.af.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then((result) => {
      console.log(result);
      this.name = result.user.displayName;
      this.userEmail = result.user.email;
      this.uid = result.user.uid;
      // var newUser = new User('player', this.uid, 0, false);
      // this.users.push(newUser);
      // console.log(newUser)
      console.log(this.name);
      // var newUser = new User('player', this.uid, 0, false);
      // this.authService.users.push(newUser);
      this.authService.findUser(this.uid);
      setTimeout(() => {
        this.currentUser = this.authService.currentUser;
        console.log(this.currentUser)
      }, 100);
      this.onLogin.emit(true);



      // this.currentUser = this.authService.currentUser;
      // console.log(foundUser);
      // console.log(this.authService.getCurrent());
      // console.log(this.userEmail);
      // console.log(this.uid);
      // run createUser(this.uid)
    })
  }

  logout(){
    this.af.auth.signOut();
    this.name = null;
    this.currentUser = null;
    this.onLogin.emit(false);
  }


  showBoard(){
    this.board = true;
  }

}
