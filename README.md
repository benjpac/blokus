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


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
