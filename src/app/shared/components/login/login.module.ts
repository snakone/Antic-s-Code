import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';

import { LoginComponent } from './login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';

@NgModule({
  declarations: [
    LoginComponent,
    SignUpComponent,
    SignInComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  entryComponents: [LoginComponent]
})

export class LoginModule { }
