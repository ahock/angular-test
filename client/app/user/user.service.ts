import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { User } from './user';
import { ReviewResult } from './user';

@Injectable()
export class UserService {
    public users$: Subject<User[]> = new Subject();
    
    public user: User;
    public res: ReviewResult;


    constructor(private http: Http ) {
        this.user = new User({firstname: "Udo", lastname: "Unbekannt"});
        console.log("Constructor UserService:", this.user);
        if( this.user.reload ) {
            this.loadUser(this.user.getUserToken());
        }
    }

    public loadUser(token: string) {
        this.http.get("/api/0.0.1/user/get", {params:{UserToken: token}})
            .map((response: Response) => {
//                console.log("loadUser", response);
                console.log("loadUserJSON", response.json());
                //Create user object
                //this.user = new User(response.json);
                return response.json();
            })
            .map((list: any) => {
//                console.log("List", list);
                var userList: User[] = [];
/*                for (let element of list) {
                    console.log("Element", element);
                    userList.push(
                        new User(element['auth_token'], element['email'])
                    );
                }*/
//                console.log("New User", list);
//                console.log("user Object:", this.user);
                
                this.user.firstname = list.firstname;
                this.user.lastname = list.lastname;
                this.user.masteries = list.masteries;
                this.user.email = list.email;
                this.user.eduobjectives = list.eduobjectives;
                this.user.groups = list.groups;
                this.user.last_login = list.last_login;
//                this.user.login_history = list.login_history;
                console.log("Global user Object:", this.user);
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
        return this.user;
    }
    public isAuthenticated() {
        return this.isAuthenticated;
    }
    
    public getResult(rid: string) : ReviewResult {
        ////////////////////////
        // old result
        // this review not done
        // never done a review
        ////////////////////////
        this.res = new ReviewResult;
        
        if(this.user.masteries!=undefined) {
            var n: number = -1;
            do { 
               n++;
            } while(n<this.user.masteries.length && rid!=this.user.masteries[n]['_id']);
//            console.log("getResult:", n, this.user.masteries.length);
            if(n>=this.user.masteries.length) {
                console.log("getResult: not done this review yet", n, rid);
            } else {
                console.log("getResult:", rid, n, this.user.masteries[n]['_id']);
            }
        } else {
            console.log("getResult: first review ever");
        }
        return this.res;
    }
}