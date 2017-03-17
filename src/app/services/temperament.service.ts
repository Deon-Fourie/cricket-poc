import { Injectable } from '@angular/core';
import { RandomService } from '../services/random.service';

@Injectable()
export class TemperamentService {
    temperament: any = ['aggressive', 'neutral', 'defensive'];  

    getTemperament():void {
        return this._randomService.chooseRandom(this.temperament);
    }; 

    constructor(private _randomService: RandomService) {}
}