import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '@shared/shared.module';

import { NavBarComponent } from './navbar.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { NavBarSearchComponent } from './components/navbar-search/navbar-search.component';
import { MobileMenuComponent } from './components/mobile-menu/mobile-menu.component';

import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

const Material = [
  MatMenuModule,
  MatButtonModule,
  MatIconModule
];

@NgModule({
  declarations: [
    NavBarComponent,
    NavigationComponent,
    NavBarSearchComponent,
    MobileMenuComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    ...Material
  ],
  exports: [
    NavBarComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class NavbarModule { }
