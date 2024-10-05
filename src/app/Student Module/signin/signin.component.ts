import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { MatSnackBar} from '@angular/material/snack-bar'
import { Router } from '@angular/router';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css',
})
export class SigninComponent {

  signInForm: FormGroup;

  constructor(private fb: FormBuilder, private snackBar: MatSnackBar,private router: Router){
    this.signInForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  onSubmit(){
    if(this.signInForm.valid){
      this.snackBar.open('Sign in successful!', 'Close', {
        duration: 2000, });
    }
    else {
      this.snackBar.open('Please fill in all fields correctly.', 'Close', {
        duration: 2000,
      });
    }
  } //OnSubmit

  
  navigateToRegister() {
    this.router.navigate(['/register']); // Change this to your register route
  }
}
