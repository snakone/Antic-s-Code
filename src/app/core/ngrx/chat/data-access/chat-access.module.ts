import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { chatReducers } from '../../ngrx.index';
import { ChatFacade } from '../chat.facace';
import { ChatEffects } from '../chat.effects';

@NgModule({
  imports: [
    StoreModule.forFeature('ChatState', chatReducers),
    EffectsModule.forFeature([
      ChatEffects
    ]),
  ],
  providers: [ChatFacade]
})

export class ChatAccessModule { }
