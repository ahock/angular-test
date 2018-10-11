import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { User } from './user';

@Injectable()
export class UserService {
    public users$: Subject<User[]> = new Subject();
    public user: User;

    constructor(private http: Http ) {
        console.log("UserService Constructor");
        // this.loadUser("hh-hh-hh");
    }

    public loadUser(token: string) {
        this.http.get("/api/0.0.1/user/get", {params:{UserToken: token}})
            .map((response: Response) => {
                console.log("loadUser", response);
                console.log("loadUserJSON", response.json());
                //Create user object
                //this.user = new User(response.json);
                return response.json();
            })

            .map((list: any) => {
                console.log("List", list);
                var userList: User[] = [];
/*                for (let element of list) {
                    console.log("Element", element);
                    userList.push(
                        new User(element['auth_token'], element['email'])
                    );
                }*/
                console.log("New User", list);
                userList.push(new User( list));
                return userList;
                //return list;
                
            })
            .forEach((list: User[]) => {
                this.users$.next(list);
            })
//        console.log("New User", this.users$);                  
            
    }

    public create(user: User) {
        this.http.put("/api/0.0.1/user/create", User)
            .forEach((response: Response) => {
                console.log(response);
                // this.loadUser();
            })
    }
    public getUserCount(): any {
        console.log("getUserCount: ", this.users$);
        
        return this.users$;
    }
    public getCurrentUser() : User {
        console.log("getCurrentUser: ", this.user);
        return this.user;
    }
}