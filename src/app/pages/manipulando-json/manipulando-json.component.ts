import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import studentsData from '../../students.json';
import { Router } from '@angular/router';

interface Student {
  id: Number;
  name: String;
  email: String;
  gender: String;
}

@Component({
  selector: 'app-manipulando-json',
  imports: [CommonModule],
  templateUrl: './manipulando-json.component.html',
  styleUrl: './manipulando-json.component.css'
})
export class ManipulandoJsonComponent {
  students: Student[] = studentsData;
  constructor(private router:Router){}

  ngOnInit():void{
    console.log(this.students)
  }

  goToDetail(student: Student){
    this.router.navigate(['detalhe', student.id, student.gender, student.name]);
  }
}
