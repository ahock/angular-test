"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Group = /** @class */ (function () {
    function Group(name) {
        this.name = name;
    }
    Group.prototype.getUserToken = function () {
        return "dfghj";
    };
    Group.prototype.getName = function () {
        return this.name;
    };
    Group.prototype.import = function (importtext) {
        var imptext = [];
        var userelement = [];
        //console.log("Import", importtext);
        imptext = importtext.split(/\r?\n|\r/);
        //        console.log("Import", imptext);
        for (var i = 0; i < imptext.length; i++) {
            userelement = imptext[i].split(/, |,/);
            console.log(userelement);
        }
    };
    return Group;
}());
exports.Group = Group;
//# sourceMappingURL=group.js.map