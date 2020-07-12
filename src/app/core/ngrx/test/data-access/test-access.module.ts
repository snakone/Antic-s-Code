import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { TestEffects } from '../test.effects';
import { TestFacade } from '../test.facade';
import { testReducers } from '../../ngrx.index';

@NgModule({
  imports: [
    StoreModule.forFeature('TestState', testReducers),
    EffectsModule.forFeature([
      TestEffects
    ]),
  ],
  providers: [TestFacade]
})

export class TestAccessModule { }
