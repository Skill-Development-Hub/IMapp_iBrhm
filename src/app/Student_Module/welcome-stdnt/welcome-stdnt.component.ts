import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-welcome-stdnt',
  templateUrl: './welcome-stdnt.component.html',
  styleUrl: './welcome-stdnt.component.css'
})
export class WelcomeStdntComponent {
  studentName: string | undefined;
  constructor(private route: ActivatedRoute , private router: Router) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.studentName = params['studentName'];
    });
  }

  navigateToLogout(){
    this.router.navigate(['/signin']);

  }


}
