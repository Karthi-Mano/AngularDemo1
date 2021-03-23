import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {CommonModule} from  '@angular/common'
import { HomeComponentComponent } from  './home-component/home-component.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { ViewStudentComponent } from  './view-student/view-student.component';
import { Router ,RouterLink} from '@angular/router'
import { StudentRouterModule } from './student.router.module';
import { DeleteStudentComponent } from './delete-student/delete-student.component';


@NgModule({
    declarations: [
        HomeComponentComponent,
        CreateStudentComponent,
        ViewStudentComponent,
        DeleteStudentComponent
    ],
    providers: [RouterLink],
    imports: [
        StudentRouterModule,
        FormsModule,
        CommonModule
    ]
})
export class StudentModule {
    
}
