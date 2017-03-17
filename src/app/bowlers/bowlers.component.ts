import { Component, Input } from '@angular/core';

@Component({
    selector: 'bowlers',
    templateUrl: 'bowlers.component.html',
    styleUrls: ['bowlers.component.css']
})

export class BowlersComponent {
    @Input() bowler1;
    @Input() bowler2;
}