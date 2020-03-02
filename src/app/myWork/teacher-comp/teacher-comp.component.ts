import { Component, OnInit } from '@angular/core';
import { Teacher } from '../models/Teacher';
import { TeacherService } from '../services/teacher.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teacher-comp',
  templateUrl: './teacher-comp.component.html',
  styleUrls: ['./teacher-comp.component.css']
})
export class TeacherCompComponent implements OnInit {

  teachers: Teacher[];
  editRowId: any = ''; // любой тип

  students = [];

  constructor(private service: TeacherService, private router: Router) {

    this.teachers = service.getTeachers();

  }

  edit(val) {
    this.editRowId = val;
  }

  remove(id) {

    let index = this.teachers.findIndex(teacher => teacher.id == id);
    this.teachers.splice(index, 1);

  }

  ngOnInit() {
  }

}
