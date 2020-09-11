import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StickyBoxComponent } from './sticky-box.component';
import { DirectivesModule } from '@shared/directives/directives.module';

@NgModule({
  declarations: [StickyBoxComponent],
  imports: [
    CommonModule,
    DirectivesModule
  ],
  exports: [StickyBoxComponent]
})

export class StickyBoxModule { }
