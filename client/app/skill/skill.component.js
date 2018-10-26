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
var challenge_service_1 = require("./../challenge/challenge.service");
var SkillComponent = /** @class */ (function () {
    function SkillComponent(reviewS, userS, challengeS, route) {
        var _this = this;
        this.reviewS = reviewS;
        this.userS = userS;
        this.challengeS = challengeS;
        this.route = route;
        this.route.params.subscribe(function (params) { return _this.workParams(params); });
        //params => console.log(params)
    }
    SkillComponent.prototype.ngOnInit = function () {
        console.log("SkillComponentInit:", this.challengeS, this.userS);
    };
    SkillComponent.prototype.workParams = function (par) {
        console.log("Skill Parameter", par);
        if (par == undefined) {
            // Request without parameter
        }
        if (par.rid) {
            // Request without parameter
        }
        if (par.id) {
            // Request without parameter
        }
    };
    SkillComponent = __decorate([
        core_1.Component({
            selector: 'skill-home',
            templateUrl: 'client/app/skill/skill.component.html',
        }),
        __metadata("design:paramtypes", [review_service_1.ReviewService, user_service_1.UserService, challenge_service_1.ChallengeService, router_1.ActivatedRoute])
    ], SkillComponent);
    return SkillComponent;
}());
exports.SkillComponent = SkillComponent;
//# sourceMappingURL=skill.component.js.map