import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { inboxReducers } from '../../ngrx.index';
import { InboxEffects } from '../inbox.effects';
import { InboxFacade } from '../inbox.facade';

@NgModule({
  imports: [
    StoreModule.forFeature('InboxState', inboxReducers),
    EffectsModule.forFeature([
      InboxEffects
    ]),
  ],
  providers: [InboxFacade]
})

export class InboxAccessModule { }
