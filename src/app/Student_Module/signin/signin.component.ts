import { Component } from '@angular/core';
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

      const {email,password} = this.signInForm.value;

      if(2==2){ //TEST -- this.checkCredentials(email,password)
      this.snackBar.open('Sign in successful!', 'Close', {
        duration: 2000, 
      });

      //this.router.navigate(['/welcome-stdnt']);
      this.router.navigate(['/std-portal']);

    }
    else{
      this.snackBar.open('Invalid Email or Password.','Close',{
        duration: 2000,
      })
    }
  }
    else {
      this.snackBar.open('Please fill in all fields correctly.', 'Close', {
        duration: 2000,
      });
    }
  } //OnSubmit



 // Function to check credentials
 private checkCredentials(email: string, password: string): boolean {
  // Assuming user data is stored in local storage
  const storedUserData = JSON.parse(localStorage.getItem('userData') || '{}');
  
   return storedUserData.email === email && storedUserData.password === password;
   // FOR TESTING return email === email && password === password;

}



  
  navigateToRegister() {
    this.router.navigate(['/register']); // Change this to your register route
  }
}
