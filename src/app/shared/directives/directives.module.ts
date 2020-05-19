import { NgModule } from '@angular/core';
import { StickyBoxDirective } from './sticky/sticky-box.directive';
import { TopButtonDirective } from './top-button/top-button.directive';
import { NavbarDirective } from './navbar/navbar.directive';
import { OnlyMobileDirective } from './only-mobile/only-mobile.directive';
import { OnlyDesktopDirective } from './only-desktop/only-desktop.directive';
import { ContactMeDirective } from './contact-me/contact-me.directive';

@NgModule({
  declarations: [
    StickyBoxDirective,
    TopButtonDirective,
    NavbarDirective,
    OnlyMobileDirective,
    OnlyDesktopDirective,
    ContactMeDirective
  ],
  exports: [
    StickyBoxDirective,
    TopButtonDirective,
    NavbarDirective,
    OnlyMobileDirective,
    OnlyDesktopDirective,
    ContactMeDirective
  ]
})

export class DirectivesModule { }
