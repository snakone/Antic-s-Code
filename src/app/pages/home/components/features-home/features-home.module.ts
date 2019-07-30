import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturesHomeComponent } from './features-home.component';
import { SharedModule } from '@app/shared/shared.module';
import { ComponentsModule } from '@app/shared/components/components.module';
import { FeaturesHomeGridComponent } from './components/features-home-grid/features-home-grid.component';
import { FeaturesHomeListLeftComponent } from './components/features-home-list-left/features-home-list-left.component';
import { FeaturesHomeListRightComponent } from './components/features-home-list-right/features-home-list-right.component';

@NgModule({
  declarations: [
    FeaturesHomeComponent,
    FeaturesHomeGridComponent,
    FeaturesHomeListLeftComponent,
    FeaturesHomeListRightComponent
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
