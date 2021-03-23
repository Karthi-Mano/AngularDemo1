import { Component, OnInit } from '@angular/core';
import {SearchService}  from '../../search.service'
@Component({
  selector: 'app-delete-student',
  templateUrl: './delete-student.component.html',
  styleUrls: ['./delete-student.component.css']
})
export class DeleteStudentComponent implements OnInit {
public itunes:any=[];
public term:string;
  constructor(private sch:SearchService) { }

  ngOnInit(): void {  
    
  }
  search()
  {
    this.itunes=this.sch.search(this.term);
    console.log(this.itunes)
  }

}
