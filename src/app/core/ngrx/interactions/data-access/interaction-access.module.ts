import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { interReducers } from '../../ngrx.index';
import { InterFacade } from '../interaction.facade';
import { InterEffects } from '../interaction.effects';

@NgModule({
  imports: [
    StoreModule.forFeature('InterState', interReducers),
    EffectsModule.forFeature([
      InterEffects
    ]),
  ],
  providers: [InterFacade]
})

export class InteractionAccessModule { }
