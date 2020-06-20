import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { SocketService } from '@core/sockets/services/socket.service';
import { ChatService } from '@core/services/chat/chat.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-contact-chat',
  templateUrl: './contact-chat.component.html',
  styleUrls: ['./contact-chat.component.scss']
})

export class ContactChatComponent implements OnInit, OnDestroy {

  @Output() close = new EventEmitter<boolean>();
  private unsubscribe$ = new Subject<void>();
  message = '';
  chat: any[] = [];
  textarea: HTMLElement;
  content: HTMLElement;

  constructor(public socket: SocketService,
              private chatSrv: ChatService) { }

  ngOnInit(): void {
    this.listenMessages();
    this.textarea = document.getElementById('chat-textarea');
    this.content = document.getElementById('chat-content');
  }

  public closeChat(): void {
    this.close.emit(true);
  }

  private listenMessages(): void {
    this.chatSrv.listen().
    pipe(takeUntil(this.unsubscribe$))
    .subscribe(res => {
      this.chat.push(res);
      setTimeout(() => {
        this.content.scrollTop = this.content.scrollHeight;
      }, 50);
    });
  }

  public sendMessage(): void {
    if (!this.message) { return; }
    this.chatSrv.send(this.message);
    this.message = '';
    this.textarea.focus();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
