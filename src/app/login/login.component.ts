import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {LoginService} from '../login.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
userName:string;
password:string;

  constructor(private router: Router,private login:LoginService) { }

  ngOnInit(): void {
  }
getLogin()
{
  var checkStatus=this.login.checkLogin(this.userName,this.password)
  if(checkStatus)
  {
    this.router.navigate(['/student']);
  }
  else
  {
    alert("You Entered Wrong Username and Password");
  }

  console.log(this.userName + ' ' +this.password );
  
}
}
