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
var SkillService = /** @class */ (function () {
    function SkillService(http) {
        this.http = http;
        this.skills = [];
    }
    SkillService.prototype.loadSkills = function () {
        var _this = this;
        this.http
            .get("/api/0.0.1/skill/get")
            .map(function (response) { return response.json(); })
            .subscribe(function (data) {
            _this.skills = data;
            console.log("loadSkills", _this.skills);
        });
        return this.skills;
    };
    SkillService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], SkillService);
    return SkillService;
}());
exports.SkillService = SkillService;
//# sourceMappingURL=skill.service.js.map