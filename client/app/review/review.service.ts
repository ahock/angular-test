import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

//import { User } from './../user/user';
import { Review } from './review';

@Injectable()
export class ReviewService {
    public review: Review;

    constructor(private http: Http ) {
        
        this.review = new Review();
        console.log("Constructor ReviewService:", this.review);


    }
}