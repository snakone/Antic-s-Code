import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@shared/shared.module';

import { FooterBarComponent } from './components/footer-bar/footer-bar.component';
import { FooterComponent } from './footer.component';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

const Material = [
  MatIconModule,
  MatButtonModule
];

@NgModule({
  declarations: [
    FooterComponent,
    FooterBarComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    ...Material
  ],
  exports: [
    FooterComponent
  ]
})

export class FooterModule { }
