import { Injectable } from '@angular/core';
import { RandomService } from '../services/random.service';

@Injectable()
export class OrientationService {
    orientation: any = ['lhb', 'rhb', 'rhb', 'rhb', 'rhb', 'rhb'];

    getOrientation():void {
        return this._randomService.chooseRandom(this.orientation);
    }; 

    constructor(private _randomService: RandomService) {}
  }