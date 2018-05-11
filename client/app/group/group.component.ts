import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth.service';

import { Group } from './group';

@Component({
  selector: 'group-home',
  templateUrl: 'client/app/group/group.component.html',
//  styleUrls: ['client/app/user/user.component.css']
})
export class GroupComponent implements OnInit {
  myClass: Group = new Group("Neue Gruppe");
  importtext: String = "Andreas Hock, andreashock@bluewin.ch\nAnita Hock, anita.hock@gmx.de";

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }
}