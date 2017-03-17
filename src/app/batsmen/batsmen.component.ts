import { Component, Input } from '@angular/core';

@Component({
    selector: 'batsmen',
    templateUrl: 'batsmen.component.html',
    styleUrls: ['batsmen.component.css']
})

export class BatsmenComponent {
    @Input() batsman1;
    @Input() batsman2;
}