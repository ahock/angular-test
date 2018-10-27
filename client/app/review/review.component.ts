import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReviewService } from './review.service';
import { UserService } from './../user/user.service';

@Component({
  selector: 'review-home',
  templateUrl: 'client/app/review/review.component.html',
  styleUrls: ['client/app/review/review.component.css']
})

export class ReviewComponent implements OnInit {
  public reviewData: any;  
  public rev_id: string;

  constructor(public userS: UserService, public reviewS: ReviewService, private route: ActivatedRoute) {
    
    this.route.params.subscribe(params => this.showParams(params));
    
  }

  ngOnInit() {
    console.log("ReviewComponentInit:", this.reviewS, this.userS);
    
    
  }
  
  public showParams(par: any) {
    this.rev_id = par.id;
    this.reviewData = this.reviewS.getReview(par.id);
    console.log("Parameter", par.id, this.reviewData);
  }
  public getRevId() {
    return this.rev_id;
  }

}