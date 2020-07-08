import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

import { CategoriesRouting } from './categories.routing';
import { CategoriesComponent } from './categories.component';

import { GridModule } from '@layout/grid/grid.module';
import { SectionModule } from '@layout/section/section.module';
import { PageHeaderModule } from '@layout/page-header/page-header.module';

@NgModule({
  declarations: [
    CategoriesComponent
  ],
  imports: [
    GridModule,
    SharedModule,
    CategoriesRouting,
    SectionModule,
    PageHeaderModule
  ]
})

export class CategoriesModule { }
