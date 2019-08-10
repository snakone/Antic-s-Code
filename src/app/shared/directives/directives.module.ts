import { NgModule } from '@angular/core';
import { StickyBoxDirective } from './sticky/sticky-box.directive';
import { TopButtonDirective } from './go-top-button/top-button.directive';

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
