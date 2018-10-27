import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

//import { User } from './../user/user';
import { EduObjective } from './eduobjective';

@Injectable()
export class EduObjectiveService {
    public eduobjective: EduObjective;

    constructor(private http: Http ) {
        this.eduobjective = new EduObjective();
        this.loadEduobjectives();
        console.log("Constructor EduObjectiveService:", this.eduobjective);
    }
    
    public loadEduobjectives(){
        this.http
            .get("/api/0.0.1/objective/list")
            .map((response: Response) => response.json())
            .subscribe(data => {
                this.eduobjective = data;
                console.log("loadEduObjectives", this.eduobjective);
            });
        return this.eduobjective;
    }    
}