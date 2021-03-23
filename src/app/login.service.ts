import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
userName:string;
password:string;
validUser:boolean=false;

  constructor() { }
  checkLogin(userName:string,password:string)
  {
    if(userName=="admin"&&password=="admin@123")
    {
      this.validUser=true ;
      console.log(this.validUser);
    }
    //else return false;

    return this.validUser;
    
  }
  getLogout()
  {
    this.validUser=false;
    console.log(this.validUser);
  }
}
