"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User(UserJSON) {
        this.reload = false;
        this.authenticated = false;
        this.newuser = true;
        this.masteries = [];
        this.groups = ["Guest"];
        this.eduobjectives = [];
        console.log("Constructor User: ", UserJSON);
        console.log("user_token", localStorage.getItem('user_token'));
        console.log("user_token", this.auth_token);
        console.log("expires_at", new Date(parseInt(localStorage.getItem('expires_at'))));
        console.log("jetzt", new Date());
        if (localStorage.getItem('user_token') != null && localStorage.getItem('user_token') != "") {
            // There is an user authenticated but the app was reloaded
            console.log("User:", this);
            this.auth_token = localStorage.getItem('user_token');
            this.authenticated = true;
            // Reload of user data needed
            this.reload = true;
        }
        else {
            if (UserJSON != undefined) {
                this.auth_token = UserJSON.token;
                this.firstname = UserJSON.firstname;
                this.lastname = UserJSON.lastname;
                this.email = UserJSON.email;
                this.masteries = UserJSON.masteries;
            }
        }
    }
    User.prototype.getUserToken = function () {
        return this.auth_token;
    };
    User.prototype.isAuthenticated = function () {
        return this.authenticated;
    };
    User.prototype.isNew = function () {
        return this.newuser;
    };
    User.prototype.getVerifications = function () {
        return this.masteries;
    };
    User.prototype.getEduObjectives = function () {
        return this.eduobjectives;
    };
    return User;
}());
exports.User = User;
var ReviewResult = /** @class */ (function () {
    function ReviewResult() {
        this.marked = [];
    }
    return ReviewResult;
}());
exports.ReviewResult = ReviewResult;
//# sourceMappingURL=user.js.map