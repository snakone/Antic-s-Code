import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { TranslateModule } from '@ngx-translate/core';

import { DirectivesModule } from '@shared/directives/directives.module';
import { PublicChatComponent } from './public-chat.component';
import { ChatBoxComponent } from './components/chat-box/chat-box.component';
import { ChatAccessModule } from '@store/chat/data-access/chat-access.module';
import { ChatMessageComponent } from './components/chat-message/chat-message.component';

const Material = [
  MatIconModule,
  MatBadgeModule,
  MatButtonModule
];

@NgModule({
  declarations: [
    PublicChatComponent,
    ChatBoxComponent,
    ChatMessageComponent
  ],
  imports: [
    CommonModule,
    ChatAccessModule,
    DirectivesModule,
    FormsModule,
    TranslateModule,
    ...Material
  ],
  exports: [
    PublicChatComponent
  ]
})

export class PublicChatModule { }
