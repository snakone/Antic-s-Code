import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import * as InboxActions from './inbox.actions';
import * as fromInbox from './inbox.selectors';
import { InboxPartialState } from '../ngrx.config';

import { Inbox, InboxMessage } from '@shared/interfaces/interfaces';

@Injectable()

export class InboxFacade {

  inbox$ = this.store.select(fromInbox.getInbox);
  inboxLoaded$ = this.store.select(fromInbox.getLoaded);
  filtered$ = this.store.select(fromInbox.getFiltered);
  selected$ = this.store.select(fromInbox.getSelected);
  unread$ = this.store.select(fromInbox.getUnread);

  constructor(private store: Store<InboxPartialState>) { }

  public get(): void {
    this.store.dispatch(InboxActions.get());
  }

  public set(inbox: Inbox): void {
    this.store.dispatch(InboxActions.set({inbox}));
  }

  public send(message: InboxMessage): void {
    this.store.dispatch(InboxActions.send({message}));
  }

  public markUnread(id: string, mark: boolean): void {
    this.store.dispatch(InboxActions.markUnread({id, mark}));
  }

  public filter(value: string): void {
    this.store.dispatch(InboxActions.filter({value}));
  }

  public reset(): void {
    this.store.dispatch(InboxActions.reset());
  }

}
