import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

//import { User } from './../user/user';
import { Challenge } from './challenge';

@Injectable()
export class ChallengeService {
    public challenge: Challenge;
    
    public activeReview = "";
    public activeChallenge = "";
    public ReviewActive = false;
    public ChallengeActive = false;

    constructor(private http: Http ) {
        this.challenge = new Challenge();
        console.log("Constructor ChallengeService:", this.challenge);
        console.log("activeReview",this.activeReview);
        console.log("activeChallenge",this.activeChallenge);
        console.log("ReviewActive",this.ReviewActive);
        console.log("ChallengeActive",this.ChallengeActive);


    }
    
/*    public loadChallenges(challengsIds: string[]){
        for(let i=0; i<challengsIds.length; i++){
            this.getChallenge(challengsIds[i]);
            console.log("loadChallenges", challengsIds[i]);
        }
    }*/
    public getChallenge(ch_id: string){
        this.http
            .get("/api/0.0.1/challenge/get", {params:{id: ch_id}})
            .map((response: Response) => response.json())
            .subscribe(data => {
                this.challenge = data;
                console.log("loadChallenge", this.challenge);
            });
        return this.challenge;
    }
    public loadChallenges(ch_ids: string[]){
        let ida = JSON.stringify(ch_ids);
        this.http
            .get("/api/0.0.1/challenge/get", {params:{id: ida}})
            .map((response: Response) => response.json())
            .subscribe(data => {
                this.challenge = data;
                console.log("loadChallenge", this.challenge);
            });
        return this.challenge;
    }

    public setRevChal(rid: string, sid: string) {
        this.activeReview = rid;
        this.activeChallenge = sid;
        this.ReviewActive = true;
        this.ChallengeActive = false;
    }
}