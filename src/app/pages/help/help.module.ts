import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HelpRoutingModule } from './help.routing';
import { SharedModule } from '@app/shared/shared.module';

import { PageHeaderModule } from '@layout/page-header/page-header.module';
import { SectionModule } from '@layout/section/section.module';
import { ContentBoxModule } from '@layout/boxes/content-box/content-box.module';
import { SnippetsModule } from '@shared/components/snippets/snippets.module';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

import { RecaptchaModule, RecaptchaFormsModule } from 'ng-recaptcha';

import { HelpComponent } from './help.component';
import { HelpIntroComponent } from './components/help-intro/help-intro.component';
import { HelpRecoverComponent } from './components/help-recover/help-recover.component';
import { HelpNewPasswordComponent } from './components/help-new-password/help-new-password.component';

const Material = [
  MatButtonModule,
  MatInputModule,
  MatIconModule
];

@NgModule({
  declarations: [
    HelpComponent,
    HelpIntroComponent,
    HelpRecoverComponent,
    HelpNewPasswordComponent
  ],
  imports: [
    CommonModule,
    HelpRoutingModule,
    SharedModule,
    PageHeaderModule,
    ContentBoxModule,
    SectionModule,
    SnippetsModule,
    RecaptchaModule,
    RecaptchaFormsModule,
    ...Material
  ]
})

export class HelpModule { }
