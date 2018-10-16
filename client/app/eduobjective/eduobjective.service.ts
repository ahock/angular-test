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
        console.log("Constructor ReviewService:", this.eduobjective);

    }
}