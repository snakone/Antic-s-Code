import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BestHomeComponent } from './best-home.component';
import { SharedModule } from '@app/shared/shared.module';
import { ComponentsModule } from '@app/shared/components/components.module';

@NgModule({
  declarations: [
    BestHomeComponent
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
