import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



import { AppComponent } from './app.component';
import { AppRouteModule }  from './app.route.module';
import { GlobalState } from './global.state';

import {FilterPipe, OrderBy} from './pipes'
import {MenuComponent} from "./common/menu"
import {HomeComponent} from "./home"

import { AlertModule, ModalModule, PaginationModule } from 'ngx-bootstrap';



declare var jQuery:any;

@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    OrderBy,    
    MenuComponent,
    HomeComponent   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule, 
    AppRouteModule,
    BrowserAnimationsModule,
    ModalModule.forRoot()    
  ],
  providers: [GlobalState],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
