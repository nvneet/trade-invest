import { Routes } from '@angular/router';
import { Component } from '@angular/core';
import { CoursesComponent } from './courses-component/courses-component';
import { LoginComponent } from './login-component/login-component';
import { authGuard } from './auth.guard';
import { HomeComponent } from './home-component/home-component';

@Component({ standalone: true, template: `<h1>My Learning</h1>` })
class MyLearningComponent {}

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'my-learning', component: MyLearningComponent, canActivate: [authGuard] },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '' },
];
