import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeacherCompComponent } from './myWork/teacher-comp/teacher-comp.component';
import { NewTeacherComponent } from './myWork/new-teacher/new-teacher.component';

const routes: Routes = [
  {
    path: 'teachers',
    component: TeacherCompComponent
  },
  {
    path: 'newTeacher',
    component: NewTeacherComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
