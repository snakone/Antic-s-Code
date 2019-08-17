import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CodeRoutingModule } from './code-routing.module';
import { CodeComponent } from './code.component';
import { ComponentsModule } from '@app/shared/components/components.module';
import { SharedModule } from '@app/shared/shared.module';
import { CodeContentComponent } from './components/code-content/code-content.component';
import { CodeSidebarComponent } from './components/code-sidebar/code-sidebar.component';

@NgModule({
  declarations: [
    CodeComponent,
    CodeContentComponent,
    CodeSidebarComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    CodeRoutingModule,
    SharedModule
  ]
})

export class CodeModule { }
