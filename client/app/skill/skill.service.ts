import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

//import { User } from './../user/user';
//import { Challenge } from './challenge';
import { Skill } from './skill';


@Injectable()
export class SkillService {
    public skills: any;

    constructor(private http: Http ) {
        this.skills = [];
    }
    
    public loadSkills(){
        this.http
            .get("/api/0.0.1/skill/get")
            .map((response: Response) => response.json())
            .subscribe(data => {
                this.skills = data;
                console.log("loadSkills", this.skills);
            });
        return this.skills;
    }

}