import { Injectable } from '@angular/core';
import { RandomService } from '../services/random.service';
import { TemperamentService } from '../services/temperament.service';
import { OrientationService } from '../services/orientation.service';

@Injectable()
export class BatsmenService {

    getBatsman1() {
        return [
            {
                "name": "Batsman",
                "number": 1,
                "temperament": this._temperamentService.getTemperament(),
                "orientation": this._orientationService.getOrientation(),
                "onStrike": true,
                "runs": 0,
                "balls": 0,
                "fours": 0,
                "sixes": 0,
            }
        ]
    }

    getBatsman2() {
        return [
            {
                "name": "Batsman",
                "number": 2,
                "temperament": this._temperamentService.getTemperament(),
                "orientation": this._orientationService.getOrientation(),
                "onStrike": true,
                "runs": 0,
                "balls": 0,
                "fours": 0,
                "sixes": 0,
            }
        ]
    }

    constructor(
        private _randomService: RandomService,
        private _temperamentService: TemperamentService,
        private _orientationService: OrientationService) {}
  
}