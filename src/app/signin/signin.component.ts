import { Component, OnInit, ViewChild } from '@angular/core';
import { NotificationService } from '../services/notification.service';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  @ViewChild('signUpForm') signUpForm: any;
  @ViewChild('signInForm') signInForm: any;
  user = ''
  selectedTab = 1;
  constructor(private calert: NotificationService, private router: Router, private loginservice: LoginService) { }

  ngOnInit() {
  }

  login(data) {
    if (this.signInForm.valid) {
      this.loginservice
        .signin(this.signInForm.value)
        .subscribe(res => {
          console.log(typeof res)
          this.calert.success('User signed in successfully!')
          localStorage.setItem('token', res['token'])
          localStorage.setItem('role', res['role'])
          localStorage.setItem('id', res['id'])
          if(res['role'] == 'ADMIN'){
            this.router.navigate(['/admin/users']);
          }else{
            this.router.navigate(['/user/book-parking']);
          }
        },
          err => {
            console.log(err)
            this.calert.warn('Invalid credentails')
            // alert("Invalid credentials");
          })
    }

  }
  signUp(data) {
    // data.reset()
    if (this.signUpForm.valid) {
      this.loginservice
        .signup(this.signUpForm.value)
        .subscribe(res => {
          this.selectedTab = 0;
          this.calert.success('User registered successfully!')
          this.signUpForm.reset()
          // localStorage.setItem('role', res['role'])
          // localStorage.setItem('id', res['id'])

        },
          err => {
            console.log(err)
            this.calert.warn('Something went wrong')
            // alert("Invalid credentials");
          })
    }
    // this.signUpForm.reset()
    // this.selectedTab = 0;
    // this.calert.success('Registered successfully')
  }

}
