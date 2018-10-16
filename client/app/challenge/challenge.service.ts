import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

//import { User } from './../user/user';
import { Challenge } from './challenge';

@Injectable()
export class ChallengeService {
    public challenge: Challenge;

    constructor(private http: Http ) {
        
        this.challenge = new Challenge();
        console.log("Constructor ChallengeService:", this.challenge);

    }
}