import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth.service';
import { UserService } from './../user/user.service';

@Component({
  selector: 'app-home',
  templateUrl: 'client/app/home/home.component.html',
  styleUrls: ['client/app/home/home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public auth: AuthService, public user: UserService) { }

  ngOnInit() {
  }

}