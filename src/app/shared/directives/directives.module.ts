import { NgModule } from '@angular/core';
import { StickyBoxDirective } from './sticky-box.directive';
import { TopButtonDirective } from './top-button.directive';

@NgModule({
  declarations: [
    StickyBoxDirective,
    TopButtonDirective
  ],
  exports: [
    StickyBoxDirective,
    TopButtonDirective
  ]
})

export class DirectivesModule { }
