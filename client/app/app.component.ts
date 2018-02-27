import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Todo } from './todo';
import { TodoService } from './todo.service';

@Component({
    selector: "todo-app",
    template: `
        <h1>Todo-Liste!!</h1>
        <ul>
            <li *ngFor="let todo of todos$|async">
                <strong>{{ todo.title }}:</strong>
                <span>{{ todo.content }}</span>
            </li>
        </ul>
       <h3>Neues Todo hinzufügen</h3>
       <input type="text" [(ngModel)]="newTodo.title" />
       <input type="text" [(ngModel)]="newTodo.content" />
       <button (click)="onAddTodo()">Todo speichern!</button>
    `
})
export class AppComponent {
    todos$: Observable<Todo[]>;
    
    newTodo = new Todo("", "");

    constructor(private todoSerivce: TodoService) { }

    ngOnInit() {
        this.todos$ = this.todoSerivce.todos$;
    }

    onAddTodo() {
        this.todoSerivce.create(this.newTodo);
    }

}