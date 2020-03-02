import { Component, OnInit } from '@angular/core';
import { TeacherService } from '../services/teacher.service';
import { Router } from '@angular/router';
import { Teacher } from '../models/Teacher';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-new-teacher',
  templateUrl: './new-teacher.component.html',
  styleUrls: ['./new-teacher.component.css']
})
export class NewTeacherComponent implements OnInit {

  model: Teacher = new Teacher(0, "", "", 0, "");
  teachers: Teacher[];

  constructor(private service: TeacherService, private router: Router) {

    this.teachers = service.getTeachers();
    let arr = this.teachers.map(t => t.id);
    this.model.id = Math.max(...arr) + 1;
  }

  onSubmit(form: NgForm) {

    this.teachers.push(this.model);
    this.router.navigate(['/teachers']);
  }

  ngOnInit() {
  }

}
