import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { Todo } from './todo';

@Injectable()
export class TodoService {
    public todos$: Subject<Todo[]> = new Subject();

    constructor(private http: Http) {
        this.loadTodos();
    }

    public loadTodos() {
        this.http.get("/api/1.0.0/todos")
            .map((response: Response) => {
                return response.json();
            })
            .map((list: any) => {
                var todoList: Todo[] = [];
                for (let element of list) {
                    todoList.push(
                        new Todo(element['title'], element['content'])
                    );
                }
                return todoList;
            })
            .forEach((list: Todo[]) => {
                this.todos$.next(list);
            })
    }

    public create(todo: Todo) {
        this.http.put("/api/1.0.0/todos/create", todo)
            .forEach((response: Response) => {
                console.log(response);
                this.loadTodos();
            })
    }
}