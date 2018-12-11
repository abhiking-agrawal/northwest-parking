import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Router, Route, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLoggedIn
  isAdmin
  ls:LoginService
  constructor(private route: ActivatedRoute,private loginService : LoginService) { 
  
    this.ls = loginService
    
  }

  ngOnInit() {
    
    
  }

}
