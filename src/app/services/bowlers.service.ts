import { Injectable } from '@angular/core';
import { RandomService } from '../services/random.service';
import { TemperamentService } from '../services/temperament.service';
import { OrientationService } from '../services/orientation.service';

@Injectable()
export class BowlersService {

    getBowler1() {
        return [
            {
                "name": "Bowler Juan",
                "number": 1,
                "temperament": this._temperamentService.getTemperament(),
                "orientation": this._orientationService.getOrientation(),
                "onStrike": true,
                "overs": 0,
                "balls": 0,
                "maidens": 0,
                "runs": 0,
                "wickets": 0
            }
        ]
    }

    getBowler2() {
        return [
            {
                "name": "Bowler Duex",
                "number": 2,
                "temperament": this._temperamentService.getTemperament(),
                "orientation": this._orientationService.getOrientation(),
                "onStrike": false,
                "overs": 0,
                "balls": 0,
                "maidens": 0,
                "runs": 0,
                "wickets": 0
            }
        ]
    }

    constructor(
        private _randomService: RandomService,
        private _temperamentService: TemperamentService,
        private _orientationService: OrientationService) {}
  
}