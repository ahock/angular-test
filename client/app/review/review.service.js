"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
//import { User } from './../user/user';
var review_1 = require("./review");
var ReviewService = /** @class */ (function () {
    function ReviewService(http) {
        this.http = http;
        this.review = new review_1.Review();
        console.log("Constructor ReviewService:", this.review);
        this.loadReviews();
    }
    ReviewService.prototype.loadReviews = function () {
        var _this = this;
        this.http
            .get("/api/0.0.1/review/list", { params: { UserToken: "vvv" } })
            .map(function (response) { return response.json(); })
            .subscribe(function (data) {
            _this.reviewlist = data;
            console.log("reviewlist loaded", _this.reviewlist);
        });
    };
    ReviewService.prototype.getReviewList = function () {
        return this.reviewlist;
    };
    ReviewService.prototype.getIsoDate = function (date_in) {
        var date_out = new Date(date_in);
        return date_out.toISOString;
    };
    ReviewService.prototype.isStartable = function (rid) {
        //
        // Check if review can be startet
        //
        return true;
    };
    ReviewService.prototype.getFirstChallenge = function (rid) {
        return "1234567890";
    };
    ReviewService.prototype.getReview = function (rid) {
        console.log("getReview:", rid);
        if (rid != undefined) {
            for (var i = 0; i < this.reviewlist.length; i++) {
                console.log("getReview:", this.reviewlist[i]._id);
                if (rid == this.reviewlist[i]._id) {
                    console.log("getReview:", this.reviewlist[i]);
                    return this.reviewlist[i];
                }
            }
        }
        else {
            return undefined;
        }
    };
    ReviewService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], ReviewService);
    return ReviewService;
}());
exports.ReviewService = ReviewService;
//# sourceMappingURL=review.service.js.map