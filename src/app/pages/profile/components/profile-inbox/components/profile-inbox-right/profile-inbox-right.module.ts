import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';

import { InboxHeaderComponent } from './components/inbox-header/inbox-header.component';
import { InboxFooterComponent } from './components/inbox-footer/inbox-footer.component';
import { InboxReplyComponent } from './components/inbox-reply/inbox-reply.component';
import { ProfileInboxRightComponent } from './profile-inbox-right.component';
import { InboxWelcomeComponent } from './components/inbox-welcome/inbox-welcome.component';

const Material = [
  MatIconModule,
  MatCheckboxModule,
];

@NgModule({
  declarations: [
    ProfileInboxRightComponent,
    InboxHeaderComponent,
    InboxFooterComponent,
    InboxReplyComponent,
    InboxWelcomeComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    ...Material
  ],
  exports: [ProfileInboxRightComponent]
})

export class ProfileInboxRightModule { }
