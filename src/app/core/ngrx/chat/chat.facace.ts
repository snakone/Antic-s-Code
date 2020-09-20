import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import * as ChatActions from './chat.actions';
import * as fromChat from './chat.selectors';
import { ChatPartialState } from '../ngrx.config';

@Injectable()

export class ChatFacade {

  messages$ = this.store.select(fromChat.getMessages);
  loaded$ = this.store.select(fromChat.getLoaded);

  constructor(private store: Store<ChatPartialState>) { }

  public listenMessages(): void {
    this.store.dispatch(ChatActions.listenMessages());
  }

  public getMessages(): void {
    this.store.dispatch(ChatActions.getMessages());
  }

  public send(message: string): void {
    this.store.dispatch(ChatActions.send({message}));
  }

  public deleteMessageById(id: string): void {
    this.store.dispatch(ChatActions.deleteById({id}));
  }

}
