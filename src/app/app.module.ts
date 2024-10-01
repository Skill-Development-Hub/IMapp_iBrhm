import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { RegisterComponent } from './register/register.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,

    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatCardModule,
  ],
  providers: [
    provideAnimationsAsync()
  ],
  exports: [SigninComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
