import { Injectable } from '@angular/core';
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


@Injectable()
export class AuthService {
  userEmail:string;
  uid:string;
  currentUser:User;
  userList: User[];
  foundUser: User;
  // get message
  items: FirebaseListObservable<any>;
  users: FirebaseListObservable<any>;
  // check auth
  name: Observable<firebase.User>;

  // property binding, which will allow us to clear the text input field after a user hits Enter to submit a new chat message
  msgVal: string = '';

  constructor(public af: AngularFireAuth, private database: AngularFireDatabase) {
    this.users = database.list('/users');
      // get messages and limit to five results
    this.items = database.list('/messages', {
      query: {
        limitToLast: 5
      }
    });
  }

  chatSend(theirMessage) {
      console.log(theirMessage)
    this.items.push({ message: theirMessage, name: this.currentUser.nickName});
  }

  updateNickName(nickname, currentUser){
    console.log(currentUser)
    var userToUpdate = this.database.object('users/' + currentUser.$key);
    userToUpdate.update({ nickName: nickname})
  }

  getCurrent(){
    return this.currentUser;
  }

  findUser(uid){
    console.log(uid);
    this.users.subscribe(dataLastEmittedFromObserver => {
      this.userList = dataLastEmittedFromObserver;
      for(var i = 0; i < this.userList.length; i ++){
         if(this.userList[i].uid == uid){
            this.currentUser = this.userList[i];
         }
      }
      console.log(this.currentUser)
      if(!this.currentUser){
        var newUser = new User('player', uid, 0, false);
        this.users.push(newUser);
      }
      console.log(this.currentUser);
      this.foundUser = this.currentUser;
      console.log(this.foundUser);
      return this.foundUser;
    });

  }
  logOff(){
    this.currentUser = null;
  }
}
