import { NgModule } from '@angular/core';
import { StickyBoxDirective } from './sticky/sticky-box.directive';
import { TopButtonDirective } from './go-top-button/top-button.directive';
import { IntersectionDirective } from './intersection/intersection.directive';

@NgModule({
  declarations: [
    StickyBoxDirective,
    TopButtonDirective,
    IntersectionDirective
  ],
  exports: [
    StickyBoxDirective,
    TopButtonDirective,
    IntersectionDirective
  ]
})

export class DirectivesModule { }
