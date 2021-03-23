import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { LoginComponent } from  './login.component';
import { LoginRouterModule } from './login.router.module';
import {StudentModule} from '../student/student.module'

@NgModule({
    declarations: [LoginComponent],
    imports: [
        LoginRouterModule,
        FormsModule,
    ]
})
export class LoginModule {
    
}
