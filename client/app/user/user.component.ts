import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth.service';
import { UserService } from './user.service';

@Component({
  selector: 'user-home',
  templateUrl: 'client/app/user/user.component.html',
//  styleUrls: ['client/app/user/user.component.css']
})
export class UserComponent implements OnInit {

  constructor(public auth: AuthService, public user: UserService) { }

  ngOnInit() {
    console.log("UserComponentInit:", this.user.user);
  }

}