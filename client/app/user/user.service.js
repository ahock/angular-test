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
var Subject_1 = require("rxjs/Subject");
var user_1 = require("./user");
var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.users$ = new Subject_1.Subject();
        this.user = new user_1.User({ firstname: "Udo", lastname: "Unbekannt" });
        console.log("Constructor UserService:", this.user);
        if (this.user.reload) {
            this.loadUser(this.user.getUserToken());
        }
    }
    UserService.prototype.loadUser = function (token) {
        var _this = this;
        this.http.get("/api/0.0.1/user/get", { params: { UserToken: token } })
            .map(function (response) {
            //                console.log("loadUser", response);
            console.log("loadUserJSON", response.json());
            //Create user object
            //this.user = new User(response.json);
            return response.json();
        })
            .map(function (list) {
            //                console.log("List", list);
            var userList = [];
            /*                for (let element of list) {
                                console.log("Element", element);
                                userList.push(
                                    new User(element['auth_token'], element['email'])
                                );
                            }*/
            //                console.log("New User", list);
            //                console.log("user Object:", this.user);
            _this.user.firstname = list.firstname;
            _this.user.lastname = list.lastname;
            _this.user.masteries = list.masteries;
            _this.user.email = list.email;
            _this.user.eduobjectives = list.eduobjectives;
            _this.user.groups = list.groups;
            _this.user.last_login = list.last_login;
            //                this.user.login_history = list.login_history;
            console.log("Global user Object:", _this.user);
            userList.push(new user_1.User(list));
            return userList;
            //return list;
        })
            .forEach(function (list) {
            _this.users$.next(list);
        });
        //        console.log("New User", this.users$); 
    };
    UserService.prototype.create = function (user) {
        this.http.put("/api/0.0.1/user/create", user_1.User)
            .forEach(function (response) {
            console.log(response);
            // this.loadUser();
        });
    };
    UserService.prototype.getUserCount = function () {
        console.log("getUserCount: ", this.users$);
        return this.users$;
    };
    UserService.prototype.getCurrentUser = function () {
        return this.user;
    };
    UserService.prototype.isAuthenticated = function () {
        return this.isAuthenticated;
    };
    UserService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map