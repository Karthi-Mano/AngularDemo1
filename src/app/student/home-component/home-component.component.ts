import { Component, OnInit } from '@angular/core';
import {StudentApiService} from '../../student-api.service';
import { Router ,RouterLink} from '@angular/router'
@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {
  public studentDetails:any[] = [];

  constructor(private stuApi:StudentApiService,private router: Router,private router1:RouterLink) { }

  ngOnInit(): void {
    console.log(this.stuApi.onload());
    this.studentDetails= this.stuApi.onload();
   

    
  }
enter(student:any)
{
  console.log("Enter "+student.regno);
 // console.log(this.router.navigate(['/viewStudent/'+student.regno]));
  this.router.navigate(['student/viewStudent/'+student.regno]);

}
delet(student:any)
{
  if(confirm("Are you sure to delete "+student.regno)) {
  this.studentDetails =  this.stuApi.delete(student.regno);
  }
  console.log("Delete  "+student.regno);
 // this.router1.routerLink=["/deleteStudent"]

}
add()
{
  console.log("Add New Element");
  // console.log(this.router.navigate(['/viewStudent/'+student.regno]));
   this.router.navigate(['student/createStudent']);
}
search()
{
  console.log("Search");
  // console.log(this.router.navigate(['/viewStudent/'+student.regno]));
   this.router.navigate(['student/deleteStudent']);
}
}
