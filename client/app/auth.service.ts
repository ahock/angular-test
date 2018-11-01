// src/app/auth/auth.service.ts

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import 'rxjs/add/operator/filter';
import * as auth0 from 'auth0-js';
import { UserService } from './user/user.service';

@Injectable()
export class AuthService {

  auth0 = new auth0.WebAuth({
    clientID: '23kRua8QIGU9V1gfK5hBmPOOVMfJ5zTG',
    domain: 'iod.eu.auth0.com',
    responseType: 'token id_token',
    audience: 'https://iod.eu.auth0.com/userinfo',
    redirectUri: 'http://angular-test-dswi.c9users.io:8080/callback',
//    redirectUri: 'https://ea1cbc842df248abb957f2bbb70d6da5.vfs.cloud9.eu-west-1.amazonaws.com/callback',
    scope: 'openid profile'
  });

  constructor(public router: Router, public user: UserService) {}

  public login(): void {
    this.auth0.authorize();
  }

  public handleAuthentication(): void {
    this.auth0.parseHash((err, authResult) => {
      console.log("authResult:", authResult);
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
        console.log("Angemeldet als:", authResult.idTokenPayload.sub);
        // console.log("Details:", authResult);
        ////// Load user data from database
        this.user.loadUser(authResult.idTokenPayload.sub);
        /////
        this.router.navigate(['/home']);
      } else if (err) {
        console.log(err);
        // Also new Auth0 user
        alert(`Error: ${err.error}. Check the console for further details.`);
        this.router.navigate(['/home']);
      }
    });
  }

  private setSession(authResult: any): void {
    // Set the time that the access token will expire at
    const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('user_token', authResult.idTokenPayload.sub);
    localStorage.setItem('expires_at', expiresAt);
    localStorage.setItem('user_details', JSON.stringify({'name':authResult.idTokenPayload.name,'nickname':authResult.idTokenPayload.nickname,'last_login':authResult.idTokenPayload.updated_at,'picture':authResult.idTokenPayload.picture}));
  }

  public logout(): void {
    // Remove tokens and expiry time from localStorage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('user_token');
    localStorage.removeItem('expires_at');
    localStorage.removeItem('user_details');
    // Go back to the home route
    this.router.navigate(['/']);
  }

  public isAuthenticated(): boolean {
    // Check whether the current time is past the
    // access token's expiry time
    const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }

  public getUserToken(): string {
    // Return topken of user, not the user id
    return     localStorage.getItem('user_token');
  }
  public getAuthDetails(): any {

//    var date: any = new Date(localStorage.getItem('expires_at')*1000);
    
// Hours part from the timestamp
//var hours = date.getHours();
// Minutes part from the timestamp
//var minutes = "0" + date.getMinutes();
// Seconds part from the timestamp
//var seconds = "0" + date.getSeconds();

// Will display time in 10:30:23 format
//var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
    
    return JSON.parse(localStorage.getItem('user_details'));
  }
}