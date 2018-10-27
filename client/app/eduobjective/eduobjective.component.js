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
var eduobjective_service_1 = require("./eduobjective.service");
var EduObjectiveComponent = /** @class */ (function () {
    function EduObjectiveComponent(userS, reviewS, eduoS, route) {
        var _this = this;
        this.userS = userS;
        this.reviewS = reviewS;
        this.eduoS = eduoS;
        this.route = route;
        this.route.params.subscribe(function (params) { return _this.showParams(params); });
        //params => console.log(params)
    }
    EduObjectiveComponent.prototype.ngOnInit = function () {
        console.log("ReviewComponentInit:", this.reviewS, this.userS);
    };
    EduObjectiveComponent.prototype.showParams = function (par) {
        this.rev_id = par.id;
        this.eduolist = this.eduoS.loadEduobjectives();
        console.log("Parameter", par, this.rev_id, this.eduolist);
    };
    EduObjectiveComponent.prototype.getRevId = function () {
        return this.rev_id;
    };
    EduObjectiveComponent = __decorate([
        core_1.Component({
            selector: 'eduobjective-home',
            templateUrl: 'client/app/eduobjective/eduobjective.component.html',
            styleUrls: ['client/app/eduobjective/eduobjective.component.css']
        }),
        __metadata("design:paramtypes", [user_service_1.UserService, review_service_1.ReviewService, eduobjective_service_1.EduObjectiveService, router_1.ActivatedRoute])
    ], EduObjectiveComponent);
    return EduObjectiveComponent;
}());
exports.EduObjectiveComponent = EduObjectiveComponent;
//# sourceMappingURL=eduobjective.component.js.map