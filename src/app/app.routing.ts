import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserComponent } from './user/user.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { TodoComponent } from './todo/todo.component';
import { BirthdayComponent } from './birthday/birthday.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const appRoutes: Routes = [
 
  { path: '', component: NavComponent, children : [
    {
      path: '',
      component: HomeComponent
    }
  ] },
  { path: 'user', component: NavComponent, children : [
    {
      path: '',
      component: UserComponent
    }
  ] },
  { path: 'about', component: NavComponent, children : [
    {
      path: '',
      component: AboutComponent
    }
  ] },
  { path: 'todo', component: NavComponent, children : [
    {
      path: '',
      component: TodoComponent
    }
  ] },
  { path: 'birthday', component: NavComponent, children : [
    {
      path: '',
      component: BirthdayComponent
    }
  ] },
  { path: '', component:  NavComponent, children : [
    {
      path: '**',
      component: PagenotfoundComponent
    }
  ]  }
   
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);