import { Injectable } from '@angular/core';

@Injectable()
export class TeamService {

    getTeam1() {
        return [
            {
                "name": "India",
                "runs": 0,
                "overs": 0,
                "balls": 0,
                "wickets": 0,
                "noballs": 0,
                "batting": true,
            }
        ]
    }

    getTeam2() {
        return [
            {
                "name": "South Africa",
                "runs": 0,
                "overs": 0,
                "balls": 0,
                "wickets": 0,
                "noballs": 0,
                "batting": false,
            }
        ]
    }

}