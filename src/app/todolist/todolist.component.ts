import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-todolist',
  // standalone: true,
  // imports: [],
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.css'
})
export class TodolistComponent implements OnInit {

  taskArray = [{taskName:'Brush teeth', isCompleted: false}];

  constructor(){}

  ngOnInit(): void {
    
  }

  onSubmit(form: NgForm){
    console.log(form);
    this.taskArray.push({
      taskName:form.controls['task'].value,
      isCompleted: false
    });
    //reset() Efface la saisie après soumission du formulaire
    form.reset();
  }

  onDelete(index: number) {
    console.log(index);
    //splice supprime un élément d'un tb en utilisant son indice ds ce tb.
    this.taskArray.splice(index,1);
  }

  onCheck(index: number){
    console.log(this.taskArray);

    this.taskArray[index].isCompleted = !this.taskArray[index].isCompleted
  }

}
