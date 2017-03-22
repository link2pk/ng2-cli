import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//import { Ng2BootstrapModule } from 'ng2-bootstrap';
//import { na } from 'ng2-bootstrap/ng2-bootstrap';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { TodoComponent } from './todo/todo.component';
import { BirthdayComponent } from './birthday/birthday.component';
import { BirthdaypipeComponent } from './birthdaypipe/birthdaypipe.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ControlMessagesComponent } from './control-messages/control-messages.component';



@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AboutComponent,
    HomeComponent,
    NavComponent,
    TodoComponent,
    BirthdayComponent,
    BirthdaypipeComponent,
    PagenotfoundComponent,
    ControlMessagesComponent
  ],
  imports: [
    BrowserModule,
    
    ReactiveFormsModule,
    HttpModule,
    routing
   // Ng2BootstrapModule.forRoot()
   //AlertModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
