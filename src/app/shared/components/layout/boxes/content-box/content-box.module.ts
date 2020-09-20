import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { MatIconModule } from '@angular/material/icon';

import { ContentBoxComponent } from './content-box.component';

@NgModule({
  declarations: [
    ContentBoxComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    MatIconModule
  ],
  exports: [
    ContentBoxComponent
  ]
})

export class ContentBoxModule { }
