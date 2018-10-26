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
var challenge_1 = require("./challenge");
var ChallengeService = /** @class */ (function () {
    function ChallengeService(http) {
        this.http = http;
        this.activeReview = "";
        this.activeChallenge = "";
        this.ReviewActive = false;
        this.ChallengeActive = false;
        this.challenge = new challenge_1.Challenge();
        console.log("Constructor ChallengeService:", this.challenge);
        console.log("activeReview", this.activeReview);
        console.log("activeChallenge", this.activeChallenge);
        console.log("ReviewActive", this.ReviewActive);
        console.log("ChallengeActive", this.ChallengeActive);
    }
    /*    public loadChallenges(challengsIds: string[]){
            for(let i=0; i<challengsIds.length; i++){
                this.getChallenge(challengsIds[i]);
                console.log("loadChallenges", challengsIds[i]);
            }
        }*/
    ChallengeService.prototype.getChallenge = function (ch_id) {
        var _this = this;
        this.http
            .get("/api/0.0.1/challenge/get", { params: { id: ch_id } })
            .map(function (response) { return response.json(); })
            .subscribe(function (data) {
            _this.challenge = data;
            console.log("loadChallenge", _this.challenge);
        });
        return this.challenge;
    };
    ChallengeService.prototype.loadChallenges = function (ch_ids) {
        var _this = this;
        var ida = JSON.stringify(ch_ids);
        this.http
            .get("/api/0.0.1/challenge/get", { params: { id: ida } })
            .map(function (response) { return response.json(); })
            .subscribe(function (data) {
            _this.challenge = data;
            console.log("loadChallenge", _this.challenge);
        });
        return this.challenge;
    };
    ChallengeService.prototype.setRevChal = function (rid, sid) {
        this.activeReview = rid;
        this.activeChallenge = sid;
        this.ReviewActive = true;
        this.ChallengeActive = false;
    };
    ChallengeService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], ChallengeService);
    return ChallengeService;
}());
exports.ChallengeService = ChallengeService;
//# sourceMappingURL=challenge.service.js.map