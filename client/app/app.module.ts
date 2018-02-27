import './rxjs-operators';

import { NgModule }      from '@angular/core';
import { HttpModule }    from '@angular/http';
import { FormsModule }   from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoService } from './todo.service';

@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  declarations: [ 
    AppComponent
  ],
  providers: [
    TodoService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
