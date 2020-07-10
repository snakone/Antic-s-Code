import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@shared/shared.module';
import { TestRoutingModule } from './test.routing';
import { TestComponent } from './test.component';
import { PageHeaderModule } from '@layout/page-header/page-header.module';
import { SectionModule } from '@layout/section/section.module';
import { BoxesModule } from '@layout/boxes/boxes.module';
import { MatTooltipModule } from '@angular/material/tooltip';

import { TestContentComponent } from './components/test-content/test-content.component';
import { TestSidebarComponent } from './components/test-sidebar/test-sidebar.component';
import { CardsModule } from '@layout/cards/cards.module';
import { TestCategoryGridComponent } from './components/test-category-grid/test-category-grid.component';

const Material = [
  MatTooltipModule
];

@NgModule({
  declarations: [
    TestComponent,
    TestContentComponent,
    TestSidebarComponent,
    TestCategoryGridComponent
  ],
  imports: [
    CommonModule,
    TestRoutingModule,
    PageHeaderModule,
    SectionModule,
    BoxesModule,
    SharedModule,
    CardsModule,
    ...Material
  ]
})

export class TestModule { }
