import { Component} from '@angular/core';
import { Developer } from '../models/developer.model';
import {  Skill } from '../models/skill.model';


@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css']
})
export class DeveloperComponent {
[x: string]: any;
developer:Developer= new Developer("Paul","Jean",25,"male","Lorem ipsum...",[
  new Skill("Angular","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkXShMfG6Ad6XUCLURe7SAVycRt1rqsrw6z4quLit_8A&s","https://angular.io"),
  new Skill("Java","https://c8.alamy.com/compfr/ph8262/la-technologie-de-programmation-java-illustration-logo-ph8262.jpg","https://www.java.com/fr/"),
  new Skill("Typescript","https://cdn-icons-png.flaticon.com/512/919/919832.png","https://www.typescriptlang.org")
])

  constructor() { 
   
  }


 

}
