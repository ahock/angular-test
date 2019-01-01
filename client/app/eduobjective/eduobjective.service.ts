import { Injectable, OnInit, OnDestroy } from '@angular/core';
import { Http, Response, RequestOptions } from '@angular/http';
//import { HttpClientModule, HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Rx';

import {TimerObservable} from "rxjs/observable/TimerObservable";

//import { User } from './../user/user';
import { EduObjective } from './eduobjective';

@Injectable()
export class EduObjectiveService implements OnInit, OnDestroy {
    public eduobjective:EduObjective[] = [];
    private select_id: number = -1;
    private filter: string = "";
    public updatelist: number[] = [];
    private token = "";
    
    private tick = 0;
    private subscription: Subscription;    
    
    constructor(private http: Http ) {
        this.loadEduobjectives(this.eduobjective);
        this.createTimer();
    }

  ngOnInit() {
  }

  ngOnDestroy() {
    console.log("ngOnDestroy");
    this.subscription.unsubscribe();
  }

    public createTimer() {
        let timer = TimerObservable.create(2000, 5000);
        console.log("createTimer", timer);
        this.subscription = timer.subscribe(t => {
          this.tick = t;
          console.log("Timer", t, this.updatelist.length>0?this.updatelist:"");
          
          // Save Eduobjectives to server
          if(this.updatelist.length>0) {
            let euo: any[] = [];
            for(let i=0;i<this.updatelist.length;i++) {
                euo.push({"oid":this.eduobjective[this.updatelist[i]].getId(),"selfassess":this.eduobjective[this.updatelist[i]].getSelfassess(),"notes":this.eduobjective[this.updatelist[i]].getNotes()});
            }
            console.log("save", JSON.stringify({"UserToken":this.token,"EduObj":euo}));
            
            this.http.get("/api/0.0.1/user/update", {params:{UserToken: this.token, EduObj: euo}})
            .map((response: Response) => {return response.json()})
            .subscribe(data => {});
          }
          this.updatelist = [];
        });
    }

    public loadEduobjectives(eoarray: EduObjective[]){
        this.http
            .get("/api/0.0.1/objective/list")
            .map((response: Response) => {
                return response.json();
            })
            .subscribe(data => {
                data.forEach(function(edo: any){
                    let eo_new = new EduObjective(edo);
//                    console.log("load edo", eo_new.getName());
                    eoarray.push(eo_new);
//                    console.log("edo", this.eduobjective.length);
                });
            });
    }
    public isSelected(i: number): boolean {
        if(i==this.select_id) {
            return true;
        }
        else {
            return false;   
        }
    }
    public select(i: number) {
        if(i == this.select_id) {
            this.select_id = -1;
        }
        else {
            this.select_id = i;
        }
    }
    public getModules(): string[] {
        let mod_list: string[] = [];
        
        this.eduobjective.forEach(function(edo: EduObjective){
//            console.log("edo", edo);
            if(mod_list.indexOf(edo.getModule())<0) {
                mod_list.push(edo.getModule());
            };
        });
        return mod_list;
    }
    public getFields(): string[] {
        let fld_list: string[] = [];
        
        this.eduobjective.forEach(function(edo: EduObjective){
//            console.log("edo", edo);
            if(fld_list.indexOf(edo.getField())<0) {
                fld_list.push(edo.getField());
            };
        });
        return fld_list;
    }
    public setMyEduOs(myeduolist: any[], usertoken: string) {
        let myedoidlist: string[] = [];
        let id: string;
        
        this.token = usertoken;
        
        myeduolist.forEach(function(edo){myedoidlist.push(edo.oid)});
        
        console.log("setMyEduOs", this.eduobjective, myeduolist, myedoidlist, this.eduobjective.length);
        
        for(let i=0; i<this.eduobjective.length; i++) {
            id = this.eduobjective[i].getId();
//            console.log("id",id);
            
            let idmy = myedoidlist.indexOf(id);
            if(idmy >= 0) {
                // My objective
//                console.log("gleich", id);
                this.eduobjective[i].setMy(myeduolist[idmy]);
            }
        }
    }
}