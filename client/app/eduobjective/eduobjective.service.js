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
var TimerObservable_1 = require("rxjs/observable/TimerObservable");
//import { User } from './../user/user';
var eduobjective_1 = require("./eduobjective");
var EduObjectiveService = /** @class */ (function () {
    function EduObjectiveService(http) {
        this.http = http;
        this.eduobjective = [];
        this.select_id = -1;
        this.filter = "";
        this.updatelist = [];
        this.token = "";
        this.tick = 0;
        this.loadEduobjectives(this.eduobjective);
        this.createTimer();
    }
    EduObjectiveService.prototype.ngOnInit = function () {
    };
    EduObjectiveService.prototype.ngOnDestroy = function () {
        console.log("ngOnDestroy");
        this.subscription.unsubscribe();
    };
    EduObjectiveService.prototype.createTimer = function () {
        var _this = this;
        var timer = TimerObservable_1.TimerObservable.create(2000, 5000);
        console.log("createTimer", timer);
        this.subscription = timer.subscribe(function (t) {
            _this.tick = t;
            console.log("Timer", t, _this.updatelist.length > 0 ? _this.updatelist : "");
            // Save Eduobjectives to server
            if (_this.updatelist.length > 0) {
                var euo = [];
                for (var i = 0; i < _this.updatelist.length; i++) {
                    euo.push({ "oid": _this.eduobjective[_this.updatelist[i]].getId(), "selfassess": _this.eduobjective[_this.updatelist[i]].getSelfassess(), "notes": _this.eduobjective[_this.updatelist[i]].getNotes() });
                }
                console.log("save", JSON.stringify({ "UserToken": _this.token, "EduObj": euo }));
                _this.http.get("/api/0.0.1/user/update", { params: { UserToken: _this.token, EduObj: euo } })
                    .map(function (response) { return response.json(); })
                    .subscribe(function (data) { });
            }
            _this.updatelist = [];
        });
    };
    EduObjectiveService.prototype.loadEduobjectives = function (eoarray) {
        this.http
            .get("/api/0.0.1/objective/list")
            .map(function (response) {
            return response.json();
        })
            .subscribe(function (data) {
            data.forEach(function (edo) {
                var eo_new = new eduobjective_1.EduObjective(edo);
                //                    console.log("load edo", eo_new.getName());
                eoarray.push(eo_new);
                //                    console.log("edo", this.eduobjective.length);
            });
        });
    };
    EduObjectiveService.prototype.isSelected = function (i) {
        if (i == this.select_id) {
            return true;
        }
        else {
            return false;
        }
    };
    EduObjectiveService.prototype.select = function (i) {
        if (i == this.select_id) {
            this.select_id = -1;
        }
        else {
            this.select_id = i;
        }
    };
    EduObjectiveService.prototype.getModules = function () {
        var mod_list = [];
        this.eduobjective.forEach(function (edo) {
            //            console.log("edo", edo);
            if (mod_list.indexOf(edo.getModule()) < 0) {
                mod_list.push(edo.getModule());
            }
            ;
        });
        return mod_list;
    };
    EduObjectiveService.prototype.getFields = function () {
        var fld_list = [];
        this.eduobjective.forEach(function (edo) {
            //            console.log("edo", edo);
            if (fld_list.indexOf(edo.getField()) < 0) {
                fld_list.push(edo.getField());
            }
            ;
        });
        return fld_list;
    };
    EduObjectiveService.prototype.setMyEduOs = function (myeduolist, usertoken) {
        var myedoidlist = [];
        var id;
        this.token = usertoken;
        myeduolist.forEach(function (edo) { myedoidlist.push(edo.oid); });
        console.log("setMyEduOs", this.eduobjective, myeduolist, myedoidlist, this.eduobjective.length);
        for (var i = 0; i < this.eduobjective.length; i++) {
            id = this.eduobjective[i].getId();
            //            console.log("id",id);
            var idmy = myedoidlist.indexOf(id);
            if (idmy >= 0) {
                // My objective
                //                console.log("gleich", id);
                this.eduobjective[i].setMy(myeduolist[idmy]);
            }
        }
    };
    EduObjectiveService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], EduObjectiveService);
    return EduObjectiveService;
}());
exports.EduObjectiveService = EduObjectiveService;
//# sourceMappingURL=eduobjective.service.js.map