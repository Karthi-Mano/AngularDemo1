import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap,Router } from '@angular/router';
import {StudentApiService} from '../../student-api.service'; 
@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.css']
})
export class ViewStudentComponent implements OnInit {
 regno:string;
 name:string;
 student:any[];
  constructor(public stuApi:StudentApiService,private activateRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe((params : ParamMap) => {
       this.regno = params.get("regno");
      // if(this.regno !== null && this.regno !== undefined){
    
      //   console.log('Student  '+this.regno)
      // }
      console.log(params);


    });
   this.student= this.stuApi.search(this.regno);
  }

}
