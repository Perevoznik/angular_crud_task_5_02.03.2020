import { Injectable } from '@angular/core';
import { Teacher } from '../models/Teacher';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  teachers: Teacher[];

  constructor() {

    this.teachers = new Array<Teacher>(
      new Teacher(1, "Oleksandr", "Popkin", 30, "205"),
      new Teacher(2, "Vasiliy", "Vasilievich", 25, "301"),
      new Teacher(3, "Petr", "Petrov", 40, "504")
    );
  }

  getTeachers(): Teacher[] {
    return this.teachers;
  }

  newTeacher(teacher: Teacher) {
    this.teachers.push(teacher);
  }
}
