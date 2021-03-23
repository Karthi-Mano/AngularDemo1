import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { HomeComponentComponent } from  './home-component/home-component.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { ViewStudentComponent } from  './view-student/view-student.component'
import { CommonModule } from '@angular/common';
import {AdminGuard} from './admin.guard'
import { DeleteStudentComponent } from './delete-student/delete-student.component';

const routes:Routes = [
    {
        path:'',
        component: HomeComponentComponent,
        canActivate: [AdminGuard]
        
        
      },
      {
        path: 'createStudent',
        component: CreateStudentComponent,
        canActivate: [AdminGuard]
        
      },
      {
        path: 'viewStudent/:regno',
          component: ViewStudentComponent,
          canActivate: [AdminGuard]
        },
        {
            path:'deleteStudent',
            component:DeleteStudentComponent
        }

]

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        CommonModule
    ],
    exports: [RouterModule]
})
export class StudentRouterModule {}