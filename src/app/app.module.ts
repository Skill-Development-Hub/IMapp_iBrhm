import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './Student_Module/signin/signin.component';
import { RegisterComponent } from './Student_Module/register/register.component';
import { StdPortalComponent } from './Student_Module/std-portal/std-portal.component';
import { AddTodoComponent } from './Student_Module/std-portal/add-todo/add-todo.component';
import { TodoItemComponent } from './Student_Module/std-portal/todo-item/todo-item.component';


import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardFooter } from '@angular/material/card';

import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { WelcomeStdntComponent } from './Student_Module/welcome-stdnt/welcome-stdnt.component';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import {MatStepperModule} from '@angular/material/stepper';




@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    RegisterComponent,
    WelcomeStdntComponent,
    StdPortalComponent,
    AddTodoComponent,
    TodoItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatListModule,
    MatGridListModule,
    MatCardFooter,
    FormsModule,

    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatCardModule,
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [
    provideAnimationsAsync()
  ],
  exports: [SigninComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
