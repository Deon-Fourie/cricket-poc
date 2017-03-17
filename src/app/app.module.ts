import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { ScoreComponent } from './score/score.component';
import { BatsmenComponent } from './batsmen/batsmen.component';
import { BowlersComponent } from './bowlers/bowlers.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    ScoreComponent,
    BatsmenComponent,
    BowlersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
