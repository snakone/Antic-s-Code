import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderModule } from '@layout/page-header/page-header.module';
import { ContentBoxModule } from '@layout/boxes/content-box/content-box.module';

import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { TranslateModule } from '@ngx-translate/core';
import { MatIconModule } from '@angular/material/icon';
import { SpinnerModule } from '@shared/components/snippets/spinner/spinner.module';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTooltipModule } from '@angular/material/tooltip';

import { ProfileInboxComponent } from './profile-inbox.component';
import { ProfileInboxLeftComponent } from './components/profile-inbox-left/profile-inbox-left.component';
import { ProfileInboxRightComponent } from './components/profile-inbox-right/profile-inbox-right.component';
import { MessageCardComponent } from './components/message-card/message-card.component';

const Material = [
  MatInputModule,
  MatIconModule,
  MatCheckboxModule,
  MatTooltipModule
];

@NgModule({
  declarations: [
    ProfileInboxComponent,
    ProfileInboxLeftComponent,
    ProfileInboxRightComponent,
    MessageCardComponent
  ],
  imports: [
    CommonModule,
    PageHeaderModule,
    ContentBoxModule,
    FormsModule,
    TranslateModule,
    SpinnerModule,
    ...Material
  ]
})

export class ProfileInboxModule { }
