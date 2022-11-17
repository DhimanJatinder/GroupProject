import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './content/about/about.component';
import { HomeComponent } from './content/home/home.component';
import { LoginComponent } from './content/login/login.component';
import { RegisterComponent } from './content/register/register.component';
import { SurveysComponent } from './content/surveys/surveys.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'surveys', component: SurveysComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
