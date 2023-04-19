import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

 username: string='';
  password: string='';
  message: string='';
  data: any;

  constructor(private router: Router) {}


  login(): void {
    if (this.username === 'admin' && this.password === 'admin') {
      this.message = 'Login Successful';
      this.router.navigate(['/student']);
    } else {
      this.message = 'Invalid username or password';
    }
  }
}
