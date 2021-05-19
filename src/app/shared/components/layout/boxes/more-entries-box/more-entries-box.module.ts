import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ContentBoxModule } from '../content-box/content-box.module';
import { PipesModule } from '@shared/pipes/pipes.module';
import { MatIconModule } from '@angular/material/icon';

import { MoreEntriesBoxComponent } from './more-entries-box.component';

const Material = [
  MatIconModule
];

@NgModule({
  declarations: [MoreEntriesBoxComponent],
  imports: [
    CommonModule,
    ContentBoxModule,
    PipesModule,
    RouterModule,
    ...Material
  ],
  exports: [MoreEntriesBoxComponent]
})

export class MoreEntriesBoxModule { }
