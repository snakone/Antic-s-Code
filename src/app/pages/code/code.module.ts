import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@app/shared/shared.module';
import { CodeRoutingModule } from './code-routing.module';
import { LayoutModule } from '@app/shared/components/layout/layout.module';

import { CodeComponent } from './code.component';
import { CodeContentComponent } from './components/code-content/code-content.component';
import { CodeSidebarComponent } from './components/code-sidebar/code-sidebar.component';
import { CodeIntroComponent } from './components/code-intro/code-intro.component';

@NgModule({
  declarations: [
    CodeComponent,
    CodeContentComponent,
    CodeSidebarComponent,
    CodeIntroComponent
  ],
  imports: [
    CommonModule,
    LayoutModule,
    SharedModule,
    CodeRoutingModule
  ]
})

export class CodeModule { }
