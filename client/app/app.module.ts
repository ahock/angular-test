import './rxjs-operators';

import { NgModule }      from '@angular/core';
import { HttpModule }    from '@angular/http';
import { FormsModule }   from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import {APP_BASE_HREF} from '@angular/common';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { GroupComponent } from './group/group.component';

import { ROUTES } from './app.routes';

import { TodoService } from './todo/todo.service';
import { AuthService } from './auth.service';
import { UserService } from './user/user.service';
import { ReviewService } from './review/review.service';

import { CallbackComponent } from './callback/callback.component';

import { ReviewComponent } from './review/review.component';


@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  declarations: [ 
    AppComponent,
    CallbackComponent,
    HomeComponent,
    UserComponent,
    GroupComponent,
    ReviewComponent
  ],
  providers: [
    TodoService,
    AuthService,
    UserService,
    ReviewService,
    { provide: APP_BASE_HREF, useValue : '/' }
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
