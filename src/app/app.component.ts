import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //TODO turn these into arrays
  //TODO choose 1 at random 
  conditionWeather = 'Cloudy';
  conditionPitch = 'Dry';

  buttonMessage = 'Face Delivery';
  overCount = 5;
  wicketCount = 10;
  ballsPerOver = 6;

  team1: any = [
    {
        "name": "India",
        "runs": 0,
        "overs": 0,
        "balls": 0,
        "wickets": 0,
        "strike": "*",
    }
  ];

  team2: any = [
    {
        "name": "South Africa",
        "runs": 0,
        "overs": 0,
        "balls": 0,
        "wickets": 0,
        "strike": "",
    }
  ];

  randomNumber(): number {
    return Math.floor(Math.random() * (7 - 1 + 1)) + 1;
  }

  outcomeCalculator(outcome): void {

  }
  
  faceDelivery(): void {
    var outcome = this.randomNumber();

    if ((this.team1[0].overs >= this.overCount) || (this.team1[0].wickets >= this.wicketCount)) {
      this.team2[0].strike = '*';
      this.team1[0].strike = '';

      this.team2[0].balls += 1;

      // this.outcomeCalculator(outcome);

      if (outcome == 5) {
          var runs = 0;
          this.team2[0].wickets += 1;
          this.feedTitle = 'A Wicket has fallen!';
      } else if (outcome == 7) {
          var runs = 1;
          this.team2[0].balls -= 1;
          this.feedTitle = 'No Ball!';
      } else {
        var runs = outcome;
        this.feedTitle = runs + ' runs!';
      }

      this.team2[0].runs += runs;
      
      if (this.team2[0].balls >= this.ballsPerOver) {
        this.team2[0].overs += 1;
        this.team2[0].balls = 0;
      }

        if (this.team2[0].runs > this.team1[0].runs) {
            this.feedTitle = this.team2[0].name + ' Has won!';
            this.buttonMessage = 'Restart Match';
        } else if ((this.team2[0].overs == this.overCount) && (this.team1[0].runs > this.team2[0].runs)) {
            this.feedTitle = this.team1[0].name + ' Has won!';
            this.buttonMessage = 'Restart Match';
        } else  if ((this.team2[0].wickets == this.wicketCount) && (this.team1[0].runs > this.team2[0].runs)) {
            this.feedTitle = this.team1[0].name + ' Has won!';
            this.buttonMessage = 'Restart Match';
        }

    }  else {

      this.team1[0].balls += 1;

      if (outcome == 5) {
          var runs = 0;
          this.team1[0].wickets += 1;
          this.feedTitle = 'A Wicket has fallen!';
      } else if (outcome == 7) {
          var runs = 1;
          this.team1[0].balls -= 1;
          this.feedTitle = 'No Ball!';
      } else {
        var runs = outcome;
        this.feedTitle = runs + ' runs!';
      }

      this.team1[0].runs += runs;

      if (this.team1[0].balls >= this.ballsPerOver) {
        this.team1[0].overs += 1;
        this.team1[0].balls = 0;
      }
    }

  }

  // batsman = '1';
  // batsmanTemperment = 'aggressive';
  // batsmanorientation = 'rhb';

  // bowler = '1';
  // bowlerTemperment = 'aggressive';
  // bowlerOrientation = 'rh';

  feedTitle = 'The Match is ready to start!';
}


//