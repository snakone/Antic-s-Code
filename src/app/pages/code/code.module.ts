import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CodeRoutingModule } from './code-routing.module';
import { CodeComponent } from './code.component';
import { ComponentsModule } from '@app/shared/components/components.module';

@NgModule({
  declarations: [
    CodeComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    CodeRoutingModule
  ]
})

export class CodeModule { }
