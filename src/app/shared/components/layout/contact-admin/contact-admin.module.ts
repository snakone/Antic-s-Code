import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactAdminComponent } from './contact-admin.component';
import { DirectivesModule } from '@shared/directives/directives.module';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { ContactChatComponent } from './components/contact-chat/contact-chat.component';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ContactAdminComponent,
    ContactChatComponent
  ],
  imports: [
    CommonModule,
    DirectivesModule,
    MatIconModule,
    MatBadgeModule,
    MatButtonModule,
    FormsModule
  ],
  exports: [
    ContactAdminComponent
  ]
})

export class ContactAdminModule { }
