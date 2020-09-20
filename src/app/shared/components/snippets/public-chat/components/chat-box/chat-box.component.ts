import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  Input,
  OnDestroy
} from '@angular/core';

import { ChatFacade } from '@store/chat/chat.facace';
import { ChatMessage, ConfirmationData, User } from '@shared/interfaces/interfaces';
import { UserService } from '@core/services/user/user.service';
import { CrafterService } from '@core/services/crafter/crafter.service';
import { ConfirmationComponent } from '@layout/dialogs/confirmation/confirmation.component';
import { takeUntil, filter, switchMap } from 'rxjs/operators';
import { of, Subject } from 'rxjs';

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.scss']
})

export class ChatBoxComponent implements OnInit, OnDestroy {

  @Input() isOn: boolean;
  @Output() close = new EventEmitter<boolean>();

  private unsubscribe$ = new Subject<void>();
  textarea: HTMLElement;
  content: HTMLElement;
  limit = 100;
  user: User;
  message = '';

  constructor(
    private chatFacade: ChatFacade,
    public userSrv: UserService,
    private crafter: CrafterService
  ) { }

  ngOnInit(): void {
    this.textarea = document.getElementById('chat-textarea');
    this.content = document.getElementById('chat-content');
    this.scrollChat();
  }

  public keyDownFunction(): void {
    if (!this.message ||
         this.message.length > this.limit ||
         this.message.length === 0) { return; }
    this.sendMessage();
  }

  public sendMessage(): void {
    this.chatFacade.send(this.message);
    this.message = '';
    this.scrollChat();
    this.textarea.focus();
  }

  public deleteMessage(msg: ChatMessage): void {
    const data: ConfirmationData = {
      message: 'DELETE.CHAT.MESSAGE',
      args: msg.message
    };

    this.crafter.dialog(ConfirmationComponent, data)
      .afterClosed()
      .pipe(
        takeUntil(this.unsubscribe$),
        filter(res => res && !!res),
        switchMap(_ => of(this.chatFacade.deleteMessageById(msg._id)))
      )
      .subscribe(_ => {
        this.crafter.toaster('SUCCESS', 'MESSAGE.DELETED', 'info');
      });
  }

  private scrollChat(): void {
    setTimeout(() => {
      this.content.scrollTop = this.content.scrollHeight;
    }, 300);
  }

  public closeChat(): void {
    this.close.emit(true);
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
