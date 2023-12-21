import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterOutlet } from '@angular/router';
import { TodolistComponent } from './todolist/todolist.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports:      [ 
    BrowserModule,
    RouterOutlet,
    AppRoutingModule,
    FormsModule
],
  providers:    [  ],

  declarations: [ 
    AppComponent,
    TodolistComponent
],
  exports:      [ 
    AppComponent 
],
  bootstrap:    [ 
    AppComponent 
]

})
export class AppModule { }