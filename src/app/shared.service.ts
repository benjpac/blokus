import { Injectable } from '@angular/core';

@Injectable()
export class SharedService {

  clicker: string;

    insertData(input){
        this.clicker = input;
    }
  constructor() { }

}
