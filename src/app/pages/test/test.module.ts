import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@shared/shared.module';
import { TestRoutingModule } from './test.routing';
import { TestComponent } from './test.component';
import { PageHeaderModule } from '@layout/page-header/page-header.module';
import { SectionModule } from '@layout/section/section.module';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CardsModule } from '@layout/cards/cards.module';
import { TestAccessModule } from '@store/test/data-access/test-access.module';
import { ContentBoxModule } from '@layout/boxes/content-box/content-box.module';
import { StickyBoxModule } from '@layout/boxes/sticky-box/sticky-box.module';
import { SpinnerModule } from '@snippets/spinner/spinner.module';

import { TestContentComponent } from './components/test-content/test-content.component';
import { TestSidebarComponent } from './components/test-sidebar/test-sidebar.component';

const Material = [
  MatTooltipModule
];

@NgModule({
  declarations: [
    TestComponent,
    TestContentComponent,
    TestSidebarComponent
  ],
  imports: [
    CommonModule,
    TestAccessModule,
    TestRoutingModule,
    PageHeaderModule,
    SectionModule,
    ContentBoxModule,
    StickyBoxModule,
    SharedModule,
    CardsModule,
    SpinnerModule,
    ...Material
  ]
})

export class TestModule { }
