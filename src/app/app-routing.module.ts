import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { TodolistComponent } from './todolist/todolist.component';

const routes: Routes = [
  {path: '/', pathMatch: 'full', redirectTo: 'todo'},
  {path: 'todo', component: TodolistComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
    RouterOutlet
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
