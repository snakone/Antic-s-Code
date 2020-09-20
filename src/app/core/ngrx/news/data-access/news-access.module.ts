import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { newsReducers } from '../../ngrx.index';
import { NewsEffects } from '../news.effects';
import { NewsFacade } from '../news.facade';

@NgModule({
  imports: [
    StoreModule.forFeature('NewsState', newsReducers),
    EffectsModule.forFeature([
      NewsEffects
    ]),
  ],
  providers: [NewsFacade]
})

export class NewsAccessModule { }
