import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './navbar.component';
import { MenuComponent } from './components/menu/menu.component';
import { SharedModule } from '@shared/shared.module';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [
    NavBarComponent,
    MenuComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    NavBarComponent,
    MenuComponent
  ]
})

export class NavbarModule { }
