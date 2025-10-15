import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { App } from './app/app';
import { StudentList } from './app/student-list/student-list';
import { StudentDetail } from './app/student-detail/student-detail';
import { ModifyStudent } from './app/modify-student/modify-student';
import { PageNotFound } from './app/page-not-found/page-not-found';


const routes: Routes = [
  { path: '', redirectTo: '/students', pathMatch: 'full' },
  { path: 'students', component: StudentList },
  { path: 'students/:id', component: StudentDetail },
  { path: 'modify-student', component: ModifyStudent },
  { path: '**', component: PageNotFound },
];

bootstrapApplication(App, {
  providers: [provideRouter(routes)]
}).catch(err => console.error(err));
