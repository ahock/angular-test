"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./rxjs-operators");
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var app_component_1 = require("./app.component");
var home_component_1 = require("./home/home.component");
var user_component_1 = require("./user/user.component");
var group_component_1 = require("./group/group.component");
var app_routes_1 = require("./app.routes");
var todo_service_1 = require("./todo/todo.service");
var auth_service_1 = require("./auth.service");
var user_service_1 = require("./user/user.service");
var review_service_1 = require("./review/review.service");
var callback_component_1 = require("./callback/callback.component");
var review_component_1 = require("./review/review.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                router_1.RouterModule.forRoot(app_routes_1.ROUTES)
            ],
            declarations: [
                app_component_1.AppComponent,
                callback_component_1.CallbackComponent,
                home_component_1.HomeComponent,
                user_component_1.UserComponent,
                group_component_1.GroupComponent,
                review_component_1.ReviewComponent
            ],
            providers: [
                todo_service_1.TodoService,
                auth_service_1.AuthService,
                user_service_1.UserService,
                review_service_1.ReviewService,
                { provide: common_1.APP_BASE_HREF, useValue: '/' }
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map