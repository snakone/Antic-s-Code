import { NgModule } from '@angular/core';
import { StickyBoxDirective } from './sticky/sticky-box.directive';
import { TopButtonDirective } from './top-button/top-button.directive';
import { IntersectionDirective } from './intersection/intersection.directive';
import { NavbarDirective } from './navbar/navbar.directive';

@NgModule({
  declarations: [
    StickyBoxDirective,
    TopButtonDirective,
    IntersectionDirective,
    NavbarDirective
  ],
  exports: [
    StickyBoxDirective,
    TopButtonDirective,
    IntersectionDirective,
    NavbarDirective
  ]
})

export class DirectivesModule { }
