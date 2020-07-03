import { Component, OnInit, EventEmitter, Output, Input, OnChanges } from '@angular/core';
import { SocketService } from '@core/sockets/services/socket.service';
import { ChatMessage } from '@shared/interfaces/interfaces';
import * as ChatActions from '@core/ngrx/actions/chat.actions';

import { Store } from '@ngrx/store';
import { AppState } from '@app/app.config';

@Component({
  selector: 'app-contact-chat',
  templateUrl: './contact-chat.component.html',
  styleUrls: ['./contact-chat.component.scss']
})

export class ContactChatComponent implements OnInit, OnChanges {

  @Input() chat: ChatMessage[];
  @Output() close = new EventEmitter<boolean>();
  message = '';
  textarea: HTMLElement;
  content: HTMLElement;

  constructor(
    public socket: SocketService,
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.textarea = document.getElementById('chat-textarea');
    this.content = document.getElementById('chat-content');
  }

  public closeChat(): void {
    this.close.emit(true);
  }

  ngOnChanges(): void {
    setTimeout(() => {
      this.content.scrollTop = this.content.scrollHeight;
    }, 50);
  }

  public keyDownFunction(event: KeyboardEvent): void {
    // tslint:disable-next-line: deprecation
    if (event.keyCode === 13 && !event.shiftKey) {
      event.preventDefault();
      this.sendMessage();
    }
  }

  public sendMessage(): void {
    if (!this.message || this.message.length > 100) { return; }
    this.store.dispatch(ChatActions.send({ request: this.message}));
    this.message = '';
    this.textarea.focus();
  }

}
