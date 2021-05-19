import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';

import { LoginComponent } from './login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ConditionsComponent } from './conditions/conditions.component';
import { AuthSignInComponent } from './auth-sign-in/auth-sign-in.component';

import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

const Material = [
  MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatCheckboxModule,
  MatInputModule,
  MatButtonModule
];

@NgModule({
  declarations: [
    LoginComponent,
    SignUpComponent,
    SignInComponent,
    ConditionsComponent,
    AuthSignInComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ...Material
  ]
})

export class LoginModule { }
