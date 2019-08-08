import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';
import { ComponentsModule } from '@app/shared/components/components.module';
import { ArticlesComponent } from './articles.component';
import { ArticlesRoutingModule } from './articles.routing';

@NgModule({
  declarations: [
    ArticlesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ComponentsModule,
    ArticlesRoutingModule
  ]
})

export class ArticlesModule { }
