import { NgModule } from '@angular/core';
import { StickyBoxDirective } from './sticky/sticky-box.directive';
import { TopButtonDirective } from './top-button/top-button.directive';
import { NavbarDirective } from './navbar/navbar.directive';

@NgModule({
  declarations: [
    StickyBoxDirective,
    TopButtonDirective,
    NavbarDirective
  ],
  exports: [
    StickyBoxDirective,
    TopButtonDirective,
    NavbarDirective
  ]
})

export class DirectivesModule { }
