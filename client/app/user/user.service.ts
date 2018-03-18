import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { User } from './user';

@Injectable()
export class UserService {
    public users$: Subject<User[]> = new Subject();

    constructor(private http: Http) {
        this.loadUser();
    }

    public loadUser() {
        this.http.get("/api/0.0.1/user/get")
            .map((response: Response) => {
                console.log("User", response);
                return response.json();
            })
            .map((list: any) => {
                var userList: User[] = [];
                for (let element of list) {
                    userList.push(
                        new User(element['auth_token'], element['email'])
                    );
                }
                return userList;
            })
            .forEach((list: User[]) => {
                this.users$.next(list);
            })
    }

    public create(user: User) {
        this.http.put("/api/0.0.1/user/create", User)
            .forEach((response: Response) => {
                console.log(response);
                this.loadUser();
            })
    }
}