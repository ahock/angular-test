"use strict";
// src/app/auth/auth.service.ts
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
require("rxjs/add/operator/filter");
var auth0 = require("auth0-js");
var user_service_1 = require("./user/user.service");
var AuthService = /** @class */ (function () {
    function AuthService(router, user) {
        this.router = router;
        this.user = user;
        this.auth0 = new auth0.WebAuth({
            clientID: '23kRua8QIGU9V1gfK5hBmPOOVMfJ5zTG',
            domain: 'iod.eu.auth0.com',
            responseType: 'token id_token',
            audience: 'https://iod.eu.auth0.com/userinfo',
            redirectUri: 'http://angular-test-dswi.c9users.io:8080/callback',
            scope: 'openid profile'
        });
    }
    AuthService.prototype.login = function () {
        this.auth0.authorize();
    };
    AuthService.prototype.handleAuthentication = function () {
        var _this = this;
        this.auth0.parseHash(function (err, authResult) {
            // console.log("authResult:", authResult);
            if (authResult && authResult.accessToken && authResult.idToken) {
                _this.setSession(authResult);
                console.log("Angemeldet als:", authResult.idTokenPayload.sub);
                // console.log("Details:", authResult);
                ////// Load user data from database
                _this.user.loadUser(authResult.idTokenPayload.sub);
                /////
                _this.router.navigate(['/home']);
            }
            else if (err) {
                console.log(err);
                // Also new Auth0 user
                alert("Error: " + err.error + ". Check the console for further details.");
                _this.router.navigate(['/home']);
            }
        });
    };
    AuthService.prototype.setSession = function (authResult) {
        // Set the time that the access token will expire at
        var expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
        localStorage.setItem('access_token', authResult.accessToken);
        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem('user_token', authResult.idTokenPayload.sub);
        localStorage.setItem('expires_at', expiresAt);
        localStorage.setItem('user_details', JSON.stringify({ 'name': authResult.idTokenPayload.name, 'nickname': authResult.idTokenPayload.nickname, 'last_login': authResult.idTokenPayload.updated_at, 'picture': authResult.idTokenPayload.picture }));
    };
    AuthService.prototype.logout = function () {
        // Remove tokens and expiry time from localStorage
        localStorage.removeItem('access_token');
        localStorage.removeItem('id_token');
        localStorage.removeItem('user_token');
        localStorage.removeItem('expires_at');
        localStorage.removeItem('user_details');
        // Go back to the home route
        this.router.navigate(['/']);
    };
    AuthService.prototype.isAuthenticated = function () {
        // Check whether the current time is past the
        // access token's expiry time
        var expiresAt = JSON.parse(localStorage.getItem('expires_at'));
        return new Date().getTime() < expiresAt;
    };
    AuthService.prototype.getUserToken = function () {
        // Return topken of user, not the user id
        return localStorage.getItem('user_token');
    };
    AuthService.prototype.getAuthDetails = function () {
        //    var date: any = new Date(localStorage.getItem('expires_at')*1000);
        // Hours part from the timestamp
        //var hours = date.getHours();
        // Minutes part from the timestamp
        //var minutes = "0" + date.getMinutes();
        // Seconds part from the timestamp
        //var seconds = "0" + date.getSeconds();
        // Will display time in 10:30:23 format
        //var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
        return JSON.parse(localStorage.getItem('user_details'));
    };
    AuthService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [router_1.Router, user_service_1.UserService])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map