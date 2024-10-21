import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './Student_Module/signin/signin.component';
import { RegisterComponent } from './Student_Module/register/register.component';
import { WelcomeStdntComponent } from './Student_Module/welcome-stdnt/welcome-stdnt.component';
import { StdPortalComponent } from './Student_Module/std-portal/std-portal.component';


const routes: Routes = [
  {path : '', redirectTo: 'signin', pathMatch : "full"},
  {path: 'signin', component : SigninComponent},
  {path : 'register', component: RegisterComponent},
  {path : 'welcome-stdnt/:studentName', component : WelcomeStdntComponent},
  {path : 'welcome-stdnt', component : WelcomeStdntComponent},
  {path : 'std-portal',component : StdPortalComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
