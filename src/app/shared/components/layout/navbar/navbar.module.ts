import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './navbar.component';
import { MenuComponent } from './components/menu/menu.component';
import { SharedModule } from '@shared/shared.module';
import { NavBarSearchComponent } from './components/navbar-search/navbar-search.component';

@NgModule({
  declarations: [
    NavBarComponent,
    MenuComponent,
    NavBarSearchComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    NavBarComponent
  ]
})

export class NavbarModule { }
