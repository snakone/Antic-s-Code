import { ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Component, Input, EventEmitter, Output } from '@angular/core';
import { ChatFacade } from '@store/chat/chat.facace';
import { ChatMessage, User } from '@shared/interfaces/interfaces';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ChatMessageComponent implements OnInit {

  chat$: Observable<ChatMessage[]>;
  @Input() user: User;
  @Output() deleted = new EventEmitter<ChatMessage>();

  constructor(private chatFacade: ChatFacade) { }

  ngOnInit(): void {
    this.chat$ = this.chatFacade.messages$;
  }

  public erase(msg: ChatMessage): void {
    this.deleted.emit(msg);
  }

}
