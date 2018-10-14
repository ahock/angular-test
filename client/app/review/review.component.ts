import { Component, OnInit } from '@angular/core';
import { ReviewService } from './review.service';
import { UserService } from './../user/user.service';

@Component({
  selector: 'review-home',
  templateUrl: 'client/app/review/review.component.html',
//  styleUrls: ['client/app/user/user.component.css']
})

export class ReviewComponent implements OnInit {

  constructor(public userS: UserService, public reviewS: ReviewService) { }

  ngOnInit() {
    console.log("ReviewComponentInit:", this.reviewS, this.userS);
  }

}