import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { TranslateModule } from '@ngx-translate/core';

import { DirectivesModule } from '@shared/directives/directives.module';
import { ContactAdminComponent } from './contact-admin.component';
import { ContactChatComponent } from './components/contact-chat/contact-chat.component';

const Material = [
  MatIconModule,
  MatBadgeModule,
  MatButtonModule
];

@NgModule({
  declarations: [
    ContactAdminComponent,
    ContactChatComponent
  ],
  imports: [
    CommonModule,
    DirectivesModule,
    FormsModule,
    TranslateModule,
    ...Material
  ],
  exports: [
    ContactAdminComponent
  ]
})

export class ContactAdminModule { }
