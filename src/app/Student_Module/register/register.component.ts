import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})

export class RegisterComponent implements OnInit {
  isLinear = true;
  // studentName: string = ' ';
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;

  constructor(
    private router: Router,
    private _formBuilder: FormBuilder,
  ){}

  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      studentName: ['', Validators.required],
      fatherName: ['', Validators.required],
      dob: ['', Validators.required],
      mobNo: ['', Validators.required],
      eMail: ['', Validators.required],
      newPassword: ['', Validators.required],
    });

    this.secondFormGroup = this._formBuilder.group({
      address: ['', Validators.required],
      fatherNo: ['', Validators.required],
      highQual: ['', Validators.required],
      yrPas: ['', Validators.required],
      colgName: ['', Validators.required],
      perCent: ['', Validators.required],
    });
  }

  navigateToWelcome(){
    //console.log(this.firstFormGroup.controls['firstCtrl'].value)
    //this.router.navigate(['/welcome-stdnt',this.studentName]);
    this.router.navigate(['/welcome-stdnt',this.firstFormGroup.controls['studentName'].value]);
  }
}