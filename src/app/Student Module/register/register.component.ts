import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  studentName: string = ' ';

  constructor(private router: Router){}


  navigateToWelcome(){
    this.router.navigate(['/welcome-stdnt',this.studentName]);
  }

}


