import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './Student Module/signin/signin.component';
import { RegisterComponent } from './Student Module/register/register.component';
import { WelcomeStdntComponent } from './Student Module/welcome-stdnt/welcome-stdnt.component';


const routes: Routes = [
  {path : '', redirectTo: 'signin', pathMatch : "full"},
  {path: 'signin', component : SigninComponent},
  {path : 'register', component: RegisterComponent},
  {path : 'welcome-stdnt/:studentName', component : WelcomeStdntComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
