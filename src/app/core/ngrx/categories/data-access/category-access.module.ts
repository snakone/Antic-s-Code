import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { categoryReducers } from '../../ngrx.index';
import { CategoryEffects } from '../category.effects';
import { CategoryFacade } from '../category.facade';

@NgModule({
  imports: [
    StoreModule.forFeature('CategoryState', categoryReducers),
    EffectsModule.forFeature([
      CategoryEffects
    ]),
  ],
  providers: [CategoryFacade]
})

export class CategoryAccessModule { }
