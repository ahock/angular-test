import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReviewService } from './../review/review.service';
import { UserService } from './../user/user.service';
import { EduObjectiveService } from './eduobjective.service';

@Component({
  selector: 'eduobjective-home',
  templateUrl: 'client/app/eduobjective/eduobjective.component.html',
  styleUrls: ['client/app/eduobjective/eduobjective.component.css']
})

export class EduObjectiveComponent implements OnInit {
  
  public rev_id: string;

  constructor(public userS: UserService, public reviewS: ReviewService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.showParams(params));
    
    
    //params => console.log(params)
    
  }

  ngOnInit() {
    console.log("ReviewComponentInit:", this.reviewS, this.userS);
  }
  
  public showParams(par: any) {
    this.rev_id = par.id;
    console.log("Parameter", par, this.rev_id);
  }
  public getRevId() {
    return this.rev_id;
  }

}