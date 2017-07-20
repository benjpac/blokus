# Blokus

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.1.0.

Group project to recreate the game blokus with in game chat. 

## Firebase setup

* Add a file "api-keys.ts" to src/app, and add the following contents: 

```
export var masterFirebaseConfig = {
  apiKey: "xxxx",
  authDomain: "xxxx.firebaseapp.com",
  databaseURL: "https://xxxx.firebaseio.com",
  storageBucket: "xxxx.appspot.com",
  messagingSenderId: "xxxx"
};
```

* Go to the firebase Console and create a new project
* Click on "Add Firebase to your web app" and fill in the values in the api-keys.ts file. 
* In the firebase console, click on "Database" in the sidebar and then under "Realtime Database" select "Rules". Replace it's contents with the code below, and click "Publish"

```
{
  "rules": {
    ".read": true,
    ".write": true
  }
}
```


## Installation Instructions

* ``` NPM install ```
* ``` ng-build ```
* ``` ng-serve ```

* Navigate to localhost:4200


## To do

* When clicked on, make piece turn active, change board to main board.
* Make button to place piece (turn inactive), move to next player

* Add to piece model and wherever it is sent to firebase: a validLocation boolean
  * Make it change color based on boolean value
  * Figure out how to deal with overlapping pieces - don't store active piece to database, or add the option to have two pieces at a cell, or redraw board each time (and draw active piece last?)

* Add logic to test pieces
  * If edges do not touch pieces with same player but different piece value
  * If any corner touches one of it's own piece
  * If not overlapping with any other piece. 


## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
