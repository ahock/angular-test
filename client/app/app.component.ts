import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Todo } from './todo/todo';
import { User } from './user/user';

import { TodoService } from './todo/todo.service';
import { UserService } from './user/user.service';
import { AuthService } from './auth.service';


@Component({
    selector: "todo-app",
    templateUrl: 'client/app/app.component.html'
})
export class AppComponent {
    todos$: Observable<Todo[]>;
    users$: Observable<User[]>;
    
    newTodo = new Todo("", "");

    constructor(private todoSerivce: TodoService, public authSerivce: AuthService, public userService: UserService) {
        console.log("Constructor: AppComponent");
        authSerivce.handleAuthentication();
    }

    ngOnInit() {
        this.todos$ = this.todoSerivce.todos$;
        this.users$ = this.userService.users$;
    }

    onAddTodo() {
        this.todoSerivce.create(this.newTodo);
    }

}