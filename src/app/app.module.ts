import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeacherCompComponent } from './myWork/teacher-comp/teacher-comp.component';
import { FormsModule } from '@angular/forms';
import { NewTeacherComponent } from './myWork/new-teacher/new-teacher.component';

@NgModule({
  declarations: [
    AppComponent,
    TeacherCompComponent,
    NewTeacherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
