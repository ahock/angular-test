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
var router_1 = require("@angular/router");
var review_service_1 = require("./../review/review.service");
var user_service_1 = require("./../user/user.service");
var challenge_service_1 = require("./challenge.service");
var ChallengeComponent = /** @class */ (function () {
    function ChallengeComponent(reviewS, userS, challengeS, route) {
        var _this = this;
        this.reviewS = reviewS;
        this.userS = userS;
        this.challengeS = challengeS;
        this.route = route;
        this.compfunction = "default";
        this.showWarning = true;
        this.showHint = -1;
        this.route.params.subscribe(function (params) { return _this.showParams(params); });
        //params => console.log(params)
    }
    ChallengeComponent.prototype.ngOnInit = function () {
        console.log("ChallengeComponentInit:", this.challengeS, this.userS);
    };
    ChallengeComponent.prototype.showParams = function (par) {
        console.log("Challenge Parameter", par);
        if (par == undefined) {
            // Request without parameter
            this.compfunction = "default";
        }
        if (par.rid) {
            // Request without parameter
            if (this.reviewS.isStartable(par.rid)) {
                this.compfunction = "start review with first challenge";
                //        this.challengeS.setRevChal(par.rid, this.reviewS.getFirstChallenge(par.rid));
                this.reviewData = this.reviewS.getReview(par.rid);
                this.result = this.userS.getResult(par.rid);
                this.challengeS.loadChallenges(this.reviewData.challenges);
                console.log("ChallengeComponent:", this.reviewData, this.showHint);
                //        this.challengeS.setRevChal(par.rid, this.reviewS.getFirstChallenge(par.rid));
            }
            else {
                this.compfunction = "default";
            }
        }
        if (par.id) {
            // Request without parameter
            this.compfunction = "continue challange";
        }
        console.log("ComponentFunction:", this.compfunction);
    };
    ChallengeComponent.prototype.toggleHint = function (event, id) {
        console.log("Toggle Hint:", event.currentTarget, id);
        if (this.showHint == id) {
            this.showHint = -1;
        }
        else {
            this.showHint = id;
        }
    };
    ChallengeComponent.prototype.markChallenge = function (id) {
        var i = this.result.marked.indexOf(id);
        if (i == -1) {
            this.result.marked.push(id);
        }
        else {
            this.result.marked = this.result.marked.splice(i, 1);
        }
        console.log("Mark:", id, this.result.marked);
    };
    ChallengeComponent = __decorate([
        core_1.Component({
            selector: 'challenge-home',
            templateUrl: 'client/app/challenge/challenge.component.html',
            styleUrls: ['client/app/challenge/challenge.component.css']
        }),
        __metadata("design:paramtypes", [review_service_1.ReviewService, user_service_1.UserService, challenge_service_1.ChallengeService, router_1.ActivatedRoute])
    ], ChallengeComponent);
    return ChallengeComponent;
}());
exports.ChallengeComponent = ChallengeComponent;
//# sourceMappingURL=challenge.component.js.map