import { Component, OnInit, OnDestroy } from '@angular/core';

import { UserService } from '@core/services/user/user.service';
import { StorageService } from '@core/storage/storage.service';
import { ChatFacade } from '@store/chat/chat.facace';

import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { SocketService } from '@core/sockets/services/socket.service';

@Component({
  selector: 'app-public-chat',
  templateUrl: './public-chat.component.html',
  styleUrls: ['./public-chat.component.scss']
})

export class PublicChatComponent implements OnInit, OnDestroy {

  class: string;
  private unsubscribe$ = new Subject<void>();

  constructor(
    public user: UserService,
    public ls: StorageService,
    public socket: SocketService,
    private chatFacade: ChatFacade
  ) { }

  ngOnInit(): void {
    this.checkData();
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
