import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BestHomeComponent } from './best-home.component';
import { SharedModule } from '@app/shared/shared.module';
import { ComponentsModule } from '@app/shared/components/components.module';
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
    SharedModule,
    ComponentsModule
  ],
  exports: [
    BestHomeComponent
  ]
})

export class BestHomeModule { }
