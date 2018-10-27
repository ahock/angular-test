import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

//import { User } from './../user/user';
import { Review } from './review';

@Injectable()
export class ReviewService {
    public review: Review;

    // List of all available reviews in the system    
    public reviewlist: any;
    // List of reviews of logged-in user
    public myreviews: any;
    // Active review, if any
    public currentreview: Review;

    constructor(private http: Http ) {
        this.review = new Review();
        console.log("Constructor ReviewService:", this.review);
        this.loadReviews();
    }
    
    public loadReviews() {
        this.http
            .get("/api/0.0.1/review/list", {params:{UserToken: "vvv"}})
            .map((response: Response) => response.json())
            .subscribe(data => {
                this.reviewlist = data;
                console.log("reviewlist loaded", this.reviewlist);
            });
    }
    public getReviewList() {
        return this.reviewlist;
    }
    public getIsoDate( date_in: string ) {
        let date_out = new Date( date_in );
        return date_out.toISOString;
    }
    public isStartable(rid: String) {
        //
        // Check if review can be startet
        //
        return true;
    }
    public getFirstChallenge(rid: String) {
        return "1234567890";
    }
    public getReview(rid: String) {
        console.log("getReview:", rid);
        if(rid!=undefined) {
            for(let i=0; i<this.reviewlist.length; i++) {
                console.log("getReview:", this.reviewlist[i]._id);
                if( rid == this.reviewlist[i]._id) {
                    console.log("getReview:", this.reviewlist[i]);
                    return this.reviewlist[i];
                }
            }
        } else {
            return undefined;
        }
    }
}