import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { HomeComponent } from './home/home.component';
import { StudentsectionComponent } from './studentsection/studentsection.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FacultyComponent } from './faculty/faculty.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'student',component:StudentComponent},
  {path:'home',component:HomeComponent},
  {path:'studentsection',component:StudentsectionComponent},
  {path:'about-us',component:AboutUsComponent},
  {path:'faculty',component:FacultyComponent},
  {path:'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
