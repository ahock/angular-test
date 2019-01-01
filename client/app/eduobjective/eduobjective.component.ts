import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReviewService } from './../review/review.service';
import { UserService } from './../user/user.service';
import { EduObjectiveService } from './eduobjective.service';

@Component({
  selector: 'eduobjective-home',
  templateUrl: 'client/app/eduobjective/eduobjective.component.html',
  styleUrls: ['client/app/eduobjective/eduobjective.component.css']
})

export class EduObjectiveComponent implements OnInit {
  public rev_id: string;
  public edit: boolean = false;
  public selfassess: string = "Neutral";

  constructor(public userS: UserService, public reviewS: ReviewService, public eduoS: EduObjectiveService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.showParams(params));
    
    
    //params => console.log(params)
    
  }

  ngOnInit() {
    console.log("EduObjectiveComponentInit:", this.reviewS, this.userS);
    
  }
  
  public showParams(par: any) {
    this.rev_id = par.id;
    //this.eduolist = this.eduoS.loadEduobjectives();
    console.log("EduObjectiveComponent_showParams", this.userS.getEduObjectives() );
    //
    //
//    this.eduoS.setMyEduOs(this.userS.getEduObjectives());
    
  }
  public getRevId() {
    return this.rev_id;
  }
  
  public loadMyEduObjectives() {
    this.eduoS.setMyEduOs(this.userS.getEduObjectives(), this.userS.getCurrentUser().getUserToken());  
  }
  public save(id: number) {
    this.edit = false;
//    console.log(id, this.selfassess);
    this.eduoS.eduobjective[id].setSelfassess(this.selfassess);
    this.eduoS.updatelist.push(id);
  }

}