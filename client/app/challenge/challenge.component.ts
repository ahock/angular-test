import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReviewService } from './../review/review.service';
import { UserService } from './../user/user.service';
import { ChallengeService } from './challenge.service';

@Component({
  selector: 'challenge-home',
  templateUrl: 'client/app/eduobjective/eduobjective.component.html',
  styleUrls: ['client/app/eduobjective/eduobjective.component.css']
})

export class ChallengeComponent implements OnInit {
  
  public rev_id: string;

  constructor(public userS: UserService, public challengeS: ChallengeService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.showParams(params));
    
    
    //params => console.log(params)
    
  }

  ngOnInit() {
    console.log("ChallengeComponentInit:", this.challengeS, this.userS);
  }
  
  public showParams(par: any) {
    this.rev_id = par.id;
    console.log("Parameter", par, this.rev_id);
  }
  public getRevId() {
    return this.rev_id;
  }

}