import { NgModule } from '@angular/core';
import { StickyBoxDirective } from './sticky/sticky-box.directive';
import { TopButtonDirective } from './go-top-button/top-button.directive';
import { ScrollingDirective } from './scrolling/scrolling.directive';

@NgModule({
  declarations: [
    StickyBoxDirective,
    TopButtonDirective,
    ScrollingDirective
  ],
  exports: [
    StickyBoxDirective,
    TopButtonDirective,
    ScrollingDirective
  ]
})

export class DirectivesModule { }
