import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdInputModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule } from '@angular/material';
import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { AuthService } from './auth.service';
import { AngularFireDatabase} from 'angularfire2/database';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { ChatFilterPipe } from './chat-filter.pipe';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket,
  messagingSenderId:
  masterFirebaseConfig.messagingSenderId
}

const routes: Routes = [
  // {
  //   path: 'home',
  //   component: HomePageComponent
  // },
  // {
  //   path: '',
  //   component: LoginPageComponent
  // }
]
@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    LoginComponent,
    ChatFilterPipe,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdMenuModule,
    MdCardModule,
    MdToolbarModule,
    MdIconModule,
    MdInputModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    RouterModule.forRoot(routes)
  ],
  providers: [
    AuthService,
    AngularFireAuth,
    AngularFireDatabase
  ],
  bootstrap: [AppComponent]
})


export class AppModule { }
