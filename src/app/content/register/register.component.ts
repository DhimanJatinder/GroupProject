import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: any = {
    username: null,
    email: null,
    password: null
  }

  isSignedUpFailed = false;
  errorMessage = "";

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    const {
      username,
      email,
      password
    } = this.form
    
    this.authService.register(username, password, email).subscribe({
      next: data => {
        console.log(data)
        this.isSignedUpFailed = false;
      },
      error: err =>{
        this.errorMessage = err.error.errorMessage;
        this.isSignedUpFailed = true;
      }
    })
  }

  goToHome() : void {
    this.router.navigate(['/login']);
  }

}