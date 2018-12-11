import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import config from '../config/config';
import { Router } from '@angular/router';
import { NotificationService } from './notification.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpclient: HttpClient,private router: Router,private calert : NotificationService) { }

  signup(registerdata) {
    return this.httpclient.post(config.url + '/user/create', registerdata, {responseType: 'text'} )
  }

  signin(signindata) {
    return this.httpclient.post(config.url + '/user/login', signindata)
  }

  isLoggedIn() : boolean{
    return localStorage.getItem('token') ? true : false
  }
  logout() {
    localStorage.removeItem('token')
    localStorage.removeItem('id')
    localStorage.removeItem('role')
    this.router.navigate(["/"])
    this.calert.success("User logout successful!")
  }

  isAdmin(): boolean {
    return localStorage.getItem('role') == 'ADMIN' ? true : false;
  }
 
}
