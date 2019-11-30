import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@app/shared/shared.module';
import { CodeRouting } from './code.routing';
import { LayoutModule } from '@app/shared/components/layout/layout.module';

import { CodeComponent } from './code.component';
import { CodeContentComponent } from './components/code-content/code-content.component';
import { CodeSidebarComponent } from './components/code-sidebar/code-sidebar.component';
import { CodeIntroComponent } from './components/code-intro/code-intro.component';
import { CodeSortBarComponent } from './components/code-sort-bar/code-sort-bar.component';
import { CodeBoxSkeletonComponent } from './components/code-box-skeleton/code-box-skeleton.component';

@NgModule({
  declarations: [
    CodeComponent,
    CodeContentComponent,
    CodeSidebarComponent,
    CodeIntroComponent,
    CodeSortBarComponent,
    CodeBoxSkeletonComponent
  ],
  imports: [
    CommonModule,
    LayoutModule,
    SharedModule,
    CodeRouting
  ]
})

export class CodeModule { }
