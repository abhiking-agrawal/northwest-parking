import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  user = ''
  constructor() { }

  ngOnInit() {
  }

  login(data){

    console.log(data)

  }

}
