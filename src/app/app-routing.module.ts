import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
   {

      path: '',
      loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
   },

   {
     path: 'student',
     loadChildren: () => import('./student/student.module').then(module => module.StudentModule)
   },
   

  
];
@NgModule({
  imports: [RouterModule.forRoot(routes,{ enableTracing: true })],
 // declarations:[LoginModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }



