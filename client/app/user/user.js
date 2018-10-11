"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User(UserJSON) {
        console.log("User Constructor", UserJSON);
        console.log("Token", UserJSON.token);
        console.log("Masteries", UserJSON.masteries);
        this.auth_token = UserJSON.token;
        this.email = "abc";
    }
    User.prototype.getUserToken = function () {
        return this.auth_token;
    };
    return User;
}());
exports.User = User;
//# sourceMappingURL=user.js.map