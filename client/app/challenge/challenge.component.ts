import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReviewService } from './../review/review.service';
import { Review } from './../review/review';
import { UserService } from './../user/user.service';
import { ReviewResult } from './../user/user';
import { ChallengeService } from './challenge.service';

@Component({
  selector: 'challenge-home',
  templateUrl: 'client/app/challenge/challenge.component.html',
  styleUrls: ['client/app/challenge/challenge.component.css']
})

export class ChallengeComponent implements OnInit {
  public compfunction = "default";
  public showWarning = true;
  public reviewData: any;
  
  public showHint: number = -1;
  public result: ReviewResult; // class in User
  
  constructor(public reviewS: ReviewService, public userS: UserService, public challengeS: ChallengeService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.showParams(params));
    
    
    //params => console.log(params)
    
  }

  ngOnInit() {
    console.log("ChallengeComponentInit:", this.challengeS, this.userS);
  }
  
  public showParams(par: any) {
    console.log("Challenge Parameter", par);
    if(par==undefined) {
      // Request without parameter
      this.compfunction="default";
    }
    if(par.rid) {
      // Request without parameter
      if(this.reviewS.isStartable(par.rid)) {
        this.compfunction="start review with first challenge";
//        this.challengeS.setRevChal(par.rid, this.reviewS.getFirstChallenge(par.rid));
        this.reviewData = this.reviewS.getReview(par.rid);
        this.result = this.userS.getResult(par.rid);
        this.challengeS.loadChallenges(this.reviewData.challenges);

        console.log("ChallengeComponent:", this.reviewData, this.showHint);
//        this.challengeS.setRevChal(par.rid, this.reviewS.getFirstChallenge(par.rid));
      }
      else {
        this.compfunction="default";
      }
    }
    if(par.id) {
      // Request without parameter
      this.compfunction="continue challange";
    }
    console.log("ComponentFunction:", this.compfunction);
  }
  public toggleHint(event: MouseEvent, id: number) {
    console.log("Toggle Hint:", event.currentTarget, id);
    if(this.showHint == id) {
      this.showHint = -1;
    }
    else {
      this.showHint = id;
    }
  }
  public markChallenge(id: number) {
    var i: number = this.result.marked.indexOf(id);
    if(i==-1) {
      this.result.marked.push(id);
    } else {
      this.result.marked = this.result.marked.splice(i,1);
    }
    console.log("Mark:", id, this.result.marked);
  }
}