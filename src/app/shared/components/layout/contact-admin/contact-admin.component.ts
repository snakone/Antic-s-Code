import { Component, OnInit, OnDestroy } from '@angular/core';

import { UserService } from '@core/services/user/user.service';
import { StorageService } from '@core/storage/storage.service';
import { ChatFacade } from '@store/chat/chat.facace';

import { Observable, Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { ChatMessage } from '@shared/interfaces/interfaces';

@Component({
  selector: 'app-contact-admin',
  templateUrl: './contact-admin.component.html',
  styleUrls: ['./contact-admin.component.scss']
})

export class ContactAdminComponent implements OnInit, OnDestroy {

  class: string;
  messages: Observable<ChatMessage[]>;
  private unsubscribe$ = new Subject<void>();

  constructor(
    public user: UserService,
    public ls: StorageService,
    private chatFacade: ChatFacade
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
        this.chatFacade.getFirst();
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
