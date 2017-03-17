import { Component } from '@angular/core';
import { RandomService } from '../services/random.service';

@Component({
    selector: 'weather',
    templateUrl: 'weather.component.html',
    styleUrls: ['weather.component.css']
})

export class WeatherComponent {

  weather: any = ['Clear', 'Overcast', 'Windy', 'Hot', 'Cold'];
  pitch: any = ['Dry', 'Green', 'Cracked', 'Slow'];

  constructor(private _randomService: RandomService) {
  }

  conditionWeather = this._randomService.chooseRandom(this.weather);
  conditionPitch = this._randomService.chooseRandom(this.pitch);
}