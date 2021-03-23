import { Component, OnInit } from '@angular/core';
import {StudentApiService} from '../../student-api.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {
name:string;
regno:string;

  constructor(public stuApi:StudentApiService,private router: Router) { }

  ngOnInit(): void {
    this.name;
    this.regno
  }
add()
{
  this.stuApi.add(this.name,this.regno);
  this.router.navigate(['student/'])

}
}
