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
var todo_1 = require("./todo");
var TodoService = /** @class */ (function () {
    function TodoService(http) {
        this.http = http;
        this.todos$ = new Subject_1.Subject();
        this.loadTodos();
    }
    TodoService.prototype.loadTodos = function () {
        var _this = this;
        this.http.get("/api/1.0.0/todos")
            .map(function (response) {
            return response.json();
        })
            .map(function (list) {
            var todoList = [];
            for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
                var element = list_1[_i];
                todoList.push(new todo_1.Todo(element['title'], element['content']));
            }
            return todoList;
        })
            .forEach(function (list) {
            _this.todos$.next(list);
        });
    };
    TodoService.prototype.create = function (todo) {
        var _this = this;
        this.http.put("/api/1.0.0/todos/create", todo)
            .forEach(function (response) {
            console.log(response);
            _this.loadTodos();
        });
    };
    TodoService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], TodoService);
    return TodoService;
}());
exports.TodoService = TodoService;
//# sourceMappingURL=todo.service.js.map