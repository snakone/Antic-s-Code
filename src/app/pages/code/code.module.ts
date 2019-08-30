import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CodeRoutingModule } from './code-routing.module';
import { CodeComponent } from './code.component';
import { ComponentsModule } from '@app/shared/components/components.module';
import { SharedModule } from '@app/shared/shared.module';
import { CodeContentComponent } from './components/code-content/code-content.component';
import { CodeSidebarComponent } from './components/code-sidebar/code-sidebar.component';
import { CodeIntroComponent } from './components/code-intro/code-intro.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    CodeComponent,
    CodeContentComponent,
    CodeSidebarComponent,
    CodeIntroComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    CodeRoutingModule,
    SharedModule,
    NgxPaginationModule
  ]
})

export class CodeModule { }
