import { Component, OnInit, OnDestroy } from '@angular/core';

import { UserService } from '@core/services/user/user.service';
import { StorageService } from '@core/storage/storage.service';
import { ChatFacade } from '@store/chat/chat.facace';

import { Observable, Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { ChatMessage } from '@shared/interfaces/interfaces';
import { SocketService } from '@core/sockets/services/socket.service';

@Component({
  selector: 'app-public-chat',
  templateUrl: './public-chat.component.html',
  styleUrls: ['./public-chat.component.scss']
})

export class PublicChatComponent implements OnInit, OnDestroy {

  class: string;
  messages: Observable<ChatMessage[]>;
  private unsubscribe$ = new Subject<void>();

  constructor(
    public user: UserService,
    public ls: StorageService,
    private chatFacade: ChatFacade,
    public socket: SocketService
  ) { }

  ngOnInit(): void {
    this.checkData();
    this.messages = this.chatFacade.messages$;
  }

  private checkData(): void {
    this.chatFacade.loaded$
     .pipe(
       filter(res => !res),
       takeUntil(this.unsubscribe$)
      )
     .subscribe(_ => {
        this.chatFacade.getMessages();
        this.chatFacade.listenMessages();
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
