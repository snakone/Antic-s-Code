import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterBarComponent } from './components/footer-bar/footer-bar.component';
import { FooterComponent } from './footer.component';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  declarations: [
    FooterComponent,
    FooterBarComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    FooterComponent
  ]
})

export class FooterModule { }
