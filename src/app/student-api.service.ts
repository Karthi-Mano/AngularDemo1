import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentApiService {
  public studentDetails:any[] = [];
  constructor() {
    this.studentDetails=[
      {
      name:"Karthick",
      regno:"B31152"
    },
    {
      name:"Logesh",
      regno:"B31153"
    },
  ]
   }
  onload()
  {
    
  return this.studentDetails;
  }
  add(name:string,regno:string)
  {
    this.studentDetails.push({name,regno})
    console.log(this.studentDetails)
  }
  search(regno:string)
  {
   var student= this.studentDetails.find(x => x.regno === regno)
  return student;
  }
  delete(regno:string)
  {
    this.studentDetails = this.studentDetails.filter(x => x.regno !== regno);

    return this.studentDetails;
  
    // console.log(student);
    // console.log(this.studentDetails);
  }
}
