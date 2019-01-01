"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EduObjective = /** @class */ (function () {
    /*
    {
        "_id": {
            "$oid": "5bc45bded2ff9f365d65f1ad"
        },
        "name": "Ich kenne die Aimy-speziefischen Begriffe und ihre Bedeutung.",
        "lang": [
            "DE"
        ],
        "type": [
            "Kennen"
        ],
        "taxonomie": "1",
        "skillgoal": "Das Konzept von Aimy so verstehen, dass man es für sich selbst gewinnbringend anwenden kann und die Vorteile anderen erklärt werden können.",
        "modul": "Aimy für Lern- und Fachcoaches",
        "field": "Aimy ICMP",
        "__v": 0
    }
    */
    function EduObjective(edo) {
        //        console.log("EduObjective Constructor", edo);
        this.id = edo._id;
        this.name = edo.name;
        this.lang = edo.lang[0];
        this.type = edo.type[0];
        this.taxonomy = edo.taxonomie;
        this.skillgoal = edo.skillgoal;
        this.modul = edo.modul;
        this.field = edo.field;
        this.my = false;
        this.notes = "...";
        this.updated = false;
    }
    EduObjective.prototype.getName = function () {
        return this.name;
    };
    EduObjective.prototype.getField = function () {
        return this.field;
    };
    EduObjective.prototype.getModule = function () {
        return this.modul;
    };
    EduObjective.prototype.getTaxonomy = function () {
        return this.taxonomy;
    };
    EduObjective.prototype.getType = function () {
        return this.type;
    };
    EduObjective.prototype.getUsage = function () {
        return 1234;
    };
    EduObjective.prototype.getSkillgoal = function () {
        return this.skillgoal;
    };
    EduObjective.prototype.getId = function () {
        return this.id;
    };
    EduObjective.prototype.isMy = function () {
        return this.my;
    };
    EduObjective.prototype.setMy = function (myedo) {
        //        console.log("serMy", myedo);
        this.my = true;
        this.selfassess = myedo.selfassess;
    };
    EduObjective.prototype.getSelfassess = function () {
        return this.selfassess;
    };
    EduObjective.prototype.getNotes = function () {
        return this.notes;
    };
    EduObjective.prototype.setSelfassess = function (assess) {
        this.selfassess = assess;
        this.updated = true;
    };
    EduObjective.prototype.isUpdated = function () {
        return this.updated;
    };
    return EduObjective;
}());
exports.EduObjective = EduObjective;
//# sourceMappingURL=eduobjective.js.map