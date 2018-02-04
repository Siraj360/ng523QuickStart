import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { UserComponent } from './user.component';
import {UserRoute }       from './user.route';


@NgModule({
  imports: [
    CommonModule,
    UserRoute
  ],
  declarations: [
    UserComponent
  ]
})
export class UserModule {}
