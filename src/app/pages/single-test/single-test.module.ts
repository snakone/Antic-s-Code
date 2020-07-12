import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SingleTestRoutingModule } from './single-test.routing';
import { PageHeaderModule } from '@layout/page-header/page-header.module';
import { SectionModule } from '@layout/section/section.module';

import { SingleTestComponent } from './single-test.component';
import { SingleTestContentComponent } from './components/single-test-content/single-test-content.component';
import { SingleTestSidebarComponent } from './components/single-test-sidebar/single-test-sidebar.component';
import { TestAccessModule } from '@store/test/data-access/test-access.module';

@NgModule({
  declarations: [
    SingleTestComponent,
    SingleTestContentComponent,
    SingleTestSidebarComponent
  ],
  imports: [
    CommonModule,
    SingleTestRoutingModule,
    PageHeaderModule,
    SectionModule,
    TestAccessModule
  ]
})

export class SingleTestModule { }
