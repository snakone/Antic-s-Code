import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@app/shared/components/layout/layout.module';
import { RouterModule } from '@angular/router';

import { BestHomeComponent } from './best-home.component';
import { BestHomeGridComponent } from './components/best-home-grid/best-home-grid.component';
import { BestHomeListComponent } from './components/best-home-list/best-home-list.component';

@NgModule({
  declarations: [
    BestHomeComponent,
    BestHomeGridComponent,
    BestHomeListComponent
  ],
  imports: [
    CommonModule,
    LayoutModule,
    RouterModule
  ],
  exports: [
    BestHomeComponent
  ]
})

export class BestHomeModule { }
