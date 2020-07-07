import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderComponent } from './page-header.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    PageHeaderComponent
  ],
  imports: [
    CommonModule,
    TranslateModule
  ],
  exports: [
    PageHeaderComponent
  ]
})

export class PageHeaderModule { }
