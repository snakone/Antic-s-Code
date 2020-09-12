import { Component, Input, EventEmitter, Output } from '@angular/core';
import { ChatMessage, User } from '@shared/interfaces/interfaces';

@Component({
  selector: 'app-chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.scss']
})

export class ChatMessageComponent {

  @Input() chat: ChatMessage[];
  @Input() user: User;
  @Output() deleted = new EventEmitter<ChatMessage>();

  constructor() { }

  public erase(msg: ChatMessage): void {
    this.deleted.emit(msg);
  }

}
