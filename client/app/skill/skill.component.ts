import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReviewService } from './../review/review.service';
import { Review } from './../review/review';
import { UserService } from './../user/user.service';
import { ReviewResult } from './../user/user';
import { ChallengeService } from './../challenge/challenge.service';
import { SkillService } from './skill.service';
import { Skill } from './skill';

@Component({
  selector: 'skill-home',
  templateUrl: 'client/app/skill/skill.component.html',
//  styleUrls: ['client/app/skill/skill.component.css']
})

export class SkillComponent implements OnInit {

  constructor(public reviewS: ReviewService, public userS: UserService, public challengeS: ChallengeService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.workParams(params));
    
    //params => console.log(params)
    
  }

  ngOnInit() {
    console.log("SkillComponentInit:", this.challengeS, this.userS);
  }
  
  public workParams(par: any) {
    console.log("Skill Parameter", par);
    if(par==undefined) {
      // Request without parameter

    }
    if(par.rid) {
      // Request without parameter

    }
    if(par.id) {
      // Request without parameter
    }
  }
}