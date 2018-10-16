"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var home_component_1 = require("./home/home.component");
var user_component_1 = require("./user/user.component");
var group_component_1 = require("./group/group.component");
var callback_component_1 = require("./callback/callback.component");
var review_component_1 = require("./review/review.component");
var eduobjective_component_1 = require("./eduobjective/eduobjective.component");
var challenge_component_1 = require("./challenge/challenge.component");
exports.ROUTES = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'user', component: user_component_1.UserComponent },
    { path: 'class', component: group_component_1.GroupComponent },
    { path: 'review', component: review_component_1.ReviewComponent },
    { path: 'review/:id', component: review_component_1.ReviewComponent },
    { path: 'eduobjective', component: eduobjective_component_1.EduObjectiveComponent },
    { path: 'eduobjective/:id', component: eduobjective_component_1.EduObjectiveComponent },
    { path: 'challenge/:id', component: challenge_component_1.ChallengeComponent },
    { path: 'callback', component: callback_component_1.CallbackComponent },
    { path: '**', redirectTo: '' }
];
//# sourceMappingURL=app.routes.js.map