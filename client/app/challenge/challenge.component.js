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
var user_service_1 = require("./../user/user.service");
var challenge_service_1 = require("./challenge.service");
var ChallengeComponent = /** @class */ (function () {
    function ChallengeComponent(userS, challengeS, route) {
        var _this = this;
        this.userS = userS;
        this.challengeS = challengeS;
        this.route = route;
        this.route.params.subscribe(function (params) { return _this.showParams(params); });
        //params => console.log(params)
    }
    ChallengeComponent.prototype.ngOnInit = function () {
        console.log("ChallengeComponentInit:", this.challengeS, this.userS);
    };
    ChallengeComponent.prototype.showParams = function (par) {
        this.rev_id = par.id;
        console.log("Parameter", par, this.rev_id);
    };
    ChallengeComponent.prototype.getRevId = function () {
        return this.rev_id;
    };
    ChallengeComponent = __decorate([
        core_1.Component({
            selector: 'challenge-home',
            templateUrl: 'client/app/eduobjective/eduobjective.component.html',
            styleUrls: ['client/app/eduobjective/eduobjective.component.css']
        }),
        __metadata("design:paramtypes", [user_service_1.UserService, challenge_service_1.ChallengeService, router_1.ActivatedRoute])
    ], ChallengeComponent);
    return ChallengeComponent;
}());
exports.ChallengeComponent = ChallengeComponent;
//# sourceMappingURL=challenge.component.js.map