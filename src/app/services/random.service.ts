import { Injectable } from '@angular/core';

@Injectable()
export class RandomService {

  chooseRandom(incomingArray): void {
    return incomingArray[Math.floor(Math.random() * incomingArray.length)];
  }
  
}