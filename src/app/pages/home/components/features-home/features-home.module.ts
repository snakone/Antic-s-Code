import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturesHomeComponent } from './features-home.component';
import { SharedModule } from '@app/shared/shared.module';
import { ComponentsModule } from '@app/shared/components/components.module';
import { FeaturesHomeGridComponent } from './components/features-home-grid/features-home-grid.component';

@NgModule({
  declarations: [
    FeaturesHomeComponent,
    FeaturesHomeGridComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    SharedModule
  ],
  exports: [
    FeaturesHomeComponent
  ]
})

export class FeaturesHomeModule { }
