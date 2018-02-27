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
var todo_1 = require("./todo");
var todo_service_1 = require("./todo.service");
var AppComponent = /** @class */ (function () {
    function AppComponent(todoSerivce) {
        this.todoSerivce = todoSerivce;
        this.newTodo = new todo_1.Todo("", "");
    }
    AppComponent.prototype.ngOnInit = function () {
        this.todos$ = this.todoSerivce.todos$;
    };
    AppComponent.prototype.onAddTodo = function () {
        this.todoSerivce.create(this.newTodo);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "todo-app",
            template: "\n        <h1>Todo-Liste!!</h1>\n        <ul>\n            <li *ngFor=\"let todo of todos$|async\">\n                <strong>{{ todo.title }}:</strong>\n                <span>{{ todo.content }}</span>\n            </li>\n        </ul>\n       <h3>Neues Todo hinzuf\u00FCgen</h3>\n       <input type=\"text\" [(ngModel)]=\"newTodo.title\" />\n       <input type=\"text\" [(ngModel)]=\"newTodo.content\" />\n       <button (click)=\"onAddTodo()\">Todo speichern!</button>\n    "
        }),
        __metadata("design:paramtypes", [todo_service_1.TodoService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map