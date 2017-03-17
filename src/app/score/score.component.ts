import { Component, Input } from '@angular/core';

@Component({
    selector: 'score',
    templateUrl: 'score.component.html',
    styleUrls: ['score.component.css']
})

export class ScoreComponent {
    @Input() team1;
    @Input() team2;
}