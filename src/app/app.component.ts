import { Component, OnInit } from '@angular/core';
import { RandomService } from './services/random.service';
import { TeamService } from './services/team.service';
import { TemperamentService } from './services/temperament.service';
import { OrientationService } from './services/orientation.service';
import { BatsmenService } from './services/batsmen.service';
import { BowlersService } from './services/bowlers.service';
import { ITeam1 } from './interfaces/team1';
import { ITeam2 } from './interfaces/team2';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [
                RandomService,
                TeamService,
                TemperamentService,
                OrientationService,
                BatsmenService,
                BowlersService
              ]
})

export class AppComponent implements OnInit {

  /* TODO's ------------
  1. Move functions from app component to services
  2. Add 'choose team' page
  3. Add 'coin toss' page [decides who is assigned to team1 and team2]
  4. Reset match after match result
  5. Add commentary feed [1 over at a time] 
  6. Ad full team scorecards*/

  // Constants
  buttonMessage: string  = 'Face Delivery';
  feedTitle: string = 'The Match is ready to start!';
  overCount: number = 5;
  wicketCount: number = 10;
  ballsPerOver: number = 6;
  battingOrder: any = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  bowlingOrder: any = [1, 2, 3, 4, 5];
  boldText1 = 'on-strike';
  boldText2 = 'off-strike';
  boldText3 = 'on-strike';
  boldText4 = 'off-strike';
  // commentaries: any = [
  //   {
  //       "over": 0,
  //       "ball": 6,
  //       "runs": 1,
  //   },
  //   {
  //       "over": 0,
  //       "ball": 5,
  //       "runs": 2,
  //   },
  //   {
  //       "over": 0,
  //       "ball": 4,
  //       "runs": 3,
  //   },
  //   {
  //       "over": 0,
  //       "ball": 3,
  //       "runs": 4,
  //   },
  //   {
  //       "over": 0,
  //       "ball": 2,
  //       "runs": 6,
  //   },
  //   {
  //       "over": 0,
  //       "ball": 1,
  //       "runs": 1,
  //   }
  // ];
  
  // Teams
  team1: ITeam1[] = this._teamService.getTeam1();
  team2: ITeam2[] = this._teamService.getTeam2();
  currentInnings = this.team1;

  // Batsmen
  batsman1: any = this._batsmenService.getBatsman1();
  batsman2: any = this._batsmenService.getBatsman2();

  // Bowlers
  bowler1: any = this._bowlersService.getBowler1();
  bowler2: any = this._bowlersService.getBowler2();
  currentBowler = this.bowler1;

  constructor(
    private _randomService: RandomService,
    private _teamService: TeamService,
    private _batsmenService: BatsmenService,
    private _bowlersService: BowlersService,
    private _temperamentService: TemperamentService,
    private _orientationService: OrientationService) {
  }

  /*--- Functions [to be moved to services] ---*/

  generateNumber(): number {
    return Math.floor(Math.random() * (7)) + 1;
  }

  wicket(): void {
    this.currentInnings[0].wickets++; // increment wicket count for current innings
    this.currentBowler[0].wickets++; // increment wicket count for current bowler
    this.dismissBatsman(); // call dismissBatsman function
    this.feedTitle = 'A Wicket has fallen!'; // update action feed
  }

  // TODO Needs improvement
  changeEnds(): void {
    if (this.batsman1[0].onStrike == true) {
      this.batsman1[0].onStrike = false;
      this.batsman2[0].onStrike = true;
      this.boldText1 = 'off-strike';
      this.boldText2 = 'on-strike';
    } else {
      this.batsman1[0].onStrike = true;
      this.batsman2[0].onStrike = false;
      this.boldText1 = 'on-strike';
      this.boldText2 = 'off-strike';
    }
  }

  dismissBatsman(): void {
    if (this.batsman1[0].onStrike == true) {

      this.batsman1[0].number = this.battingOrder[0]; // change the number to the next available number in the array
      var batsman1Index = this.battingOrder.indexOf(this.batsman1[0].number); // then remove it from the array
      this.battingOrder.splice(batsman1Index, 1); // remove batsman
      this.batsman1[0].runs = this.batsman1[0].balls = this.batsman1[0].fours = this.batsman1[0].sixes = 0; // reset batsman
      this.batsman1[0].temperament = this._temperamentService.getTemperament(); // generate new temperament
      this.batsman1[0].orientation = this._orientationService.getOrientation(); // generate new orientation

    } else if (this.batsman2[0].onStrike == true) {

      this.batsman2[0].number = this.battingOrder[0]; // change the number to the next available number in the array
      var batsman2Index = this.battingOrder.indexOf(this.batsman2[0].number); // then remove it from the array
      this.battingOrder.splice(batsman2Index, 1); // remove batsman
      this.batsman2[0].runs = this.batsman2[0].balls = this.batsman2[0].fours = this.batsman2[0].sixes = 0; // reset batsman
      this.batsman2[0].temperament = this._temperamentService.getTemperament(); // generate new temperament
      this.batsman2[0].orientation = this._orientationService.getOrientation();// generate new orientation

    }
  }

  updateScorecard(roll, batsman): void {
      batsman.runs = batsman.runs + roll; // increment run count for current batsman
      batsman.balls++; // increment ball count for current batsman

      if (roll == 4)  {
          batsman.fours++;  // increment fours count for current batsman
      } else if (roll == 6) {
          batsman.sixes++;  // increment sixes count for current batsman
      }
  }

  // TODO Needs improvement
  changeBowler(): void {
    if (this.bowler1[0].onStrike == true) {

      this.bowler1[0].onStrike = false;
      this.bowler2[0].onStrike = true;
      this.currentBowler = this.bowler2;
      this.boldText3 = 'off-strike';
      this.boldText4 = 'on-strike';

    } else if (this.bowler2[0].onStrike == true) {

      this.bowler1[0].onStrike = true;
      this.bowler2[0].onStrike = false;
      this.currentBowler = this.bowler1;
      this.boldText3 = 'on-strike';
      this.boldText4 = 'off-strike'

    }
  }

  eventCalc(diceRoll, currentInnings): void {
      if (diceRoll == 5) { // wicket
          runs = 0;
          this.wicket(); // call wicket function   
      } else if (diceRoll == 7) { // No ball
          this.currentBowler[0].balls--; // removes 1 ball from bowler
          var runs = 1; // no ball value
          currentInnings[0].balls--;  // Removes 1 ball from current innings
          currentInnings[0].noballs++; // increment no ball count for current batsman
          this.feedTitle = 'No Ball!'; // update action feed
      } else { // runs

          // scorecard
          if (this.batsman1[0].onStrike == true) {
              this.updateScorecard(diceRoll, this.batsman1[0]);
          } else {
              this.updateScorecard(diceRoll, this.batsman2[0]);
          }
        
          // strike on 1's and 3's
          if ((diceRoll == 1) || (diceRoll == 3))  {
              this.changeEnds();
          }

          runs = diceRoll;
          this.currentBowler[0].runs += runs; // increment run count for current bowler
          this.feedTitle = runs + ' runs!'; // update action feed
      }

      currentInnings[0].runs += runs; // increment run count for current innings
  }

  overCalc(currentInnings): void {
    currentInnings[0].balls++; // increment ball count for current innings
    this.currentBowler[0].balls++; // increment ball count for current bowler

    if (currentInnings[0].balls >= this.ballsPerOver) {
      currentInnings[0].overs += 1;
      currentInnings[0].balls = 0;
      this.changeEnds();
    }

    if (this.currentBowler[0].balls >= this.ballsPerOver) {
      this.currentBowler[0].overs += 1;
      this.currentBowler[0].balls = 0;
      this.changeBowler();
    }
  }
  
  ngOnInit(): void {
    var opener1Index = this.battingOrder.indexOf(1);
    this.battingOrder.splice(opener1Index, 1);

    var opener2Index = this.battingOrder.indexOf(2);
    this.battingOrder.splice(opener2Index, 1);
  }

  // reset innings values and use next team
  changeOfInnings() {
    this.team1[0].batting = false;
    this.batsman1[0].number = 1;
    this.batsman1[0].onStrike = true;
    this.batsman1[0].runs = 0;
    this.batsman1[0].balls = 0;
    this.batsman1[0].fours = 0;
    this.batsman1[0].sixes = 0;

    this.team2[0].batting = true;
    this.batsman2[0].number = 2;
    this.batsman2[0].onStrike = false;
    this.batsman2[0].runs = 0;
    this.batsman2[0].balls = 0;
    this.batsman2[0].fours = 0;
    this.batsman2[0].sixes = 0;

    this.battingOrder = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]; // restore batting order

    this.bowler1[0].runs = this.bowler1[0].overs = this.bowler1[0].balls = this.bowler1[0].maidens = this.bowler1[0].wickets = 0; // reset bowler
    this.bowler2[0].runs = this.bowler2[0].overs = this.bowler2[0].balls = this.bowler2[0].maidens = this.bowler2[0].wickets = 0; // reset bowler

    return this.team2;
  }

  faceDelivery(): void {
    // creates random number
    var diceRoll = this.generateNumber();

    // send to ScoreComponent

    // decides the actual value for the roll
    var outcome = this.eventCalc(diceRoll, this.currentInnings);

    // over calculations
    var overs =  this.overCalc(this.currentInnings);

    // change of innings
    if ((this.currentInnings[0].overs >= this.overCount) || (this.currentInnings[0].wickets >= this.wicketCount)) {
      this.currentInnings = this.changeOfInnings();
    }
    
    // winning conditions
    if (this.team2[0].runs > this.team1[0].runs) { // if team2 chases successfully
        this.feedTitle = this.team2[0].name + ' Has won!';
        this.buttonMessage = 'Restart Match';
    } else if ((this.team2[0].overs == this.overCount) && (this.team1[0].runs > this.team2[0].runs)) { // if team2 chases unsuccessfully [runs out of overs]
        this.feedTitle = this.team1[0].name + ' Has won!';
        this.buttonMessage = 'Restart Match';
    } else  if ((this.team2[0].wickets == this.wicketCount) && (this.team1[0].runs > this.team2[0].runs)) { // if team2 chases unsuccessfully [bowled out]
        this.feedTitle = this.team1[0].name + ' Has won!';
        this.buttonMessage = 'Restart Match';
    }
  }
}