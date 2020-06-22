import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from '@core/services/user/user.service';
import { StorageService } from '@core/storage/storage.service';
import * as fromChat from '@core/ngrx/selectors/chat.selector';
import * as ChatActions from '@core/ngrx/actions/chat.actions';
import { Observable, Subject } from 'rxjs';
import { ChatMessage } from '@app/shared/interfaces/interfaces';
import { Store } from '@ngrx/store';
import { AppState } from '@app/app.config';
import { filter, takeUntil, tap } from 'rxjs/operators';

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
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.checkData();
    this.messages = this.store.select(fromChat.getMessages);
  }

  private checkData(): void {
    this.store.select(fromChat.getLoaded)
     .pipe(
       filter(res => !res),
       takeUntil(this.unsubscribe$)
      )
     .subscribe(_ => {
        this.store.dispatch(ChatActions.getFirst());
        this.store.dispatch(ChatActions.getMessages());
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
