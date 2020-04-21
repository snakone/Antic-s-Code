import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';

import { LoginComponent } from './login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ConditionsComponent } from './conditions/conditions.component';
import { GoogleInComponent } from './google-in/google-in.component';

@NgModule({
  declarations: [
    LoginComponent,
    SignUpComponent,
    SignInComponent,
    ConditionsComponent,
    GoogleInComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})

export class LoginModule { }
