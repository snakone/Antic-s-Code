import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateRouting } from './create.routing';
import { CreateComponent } from './create.component';
import { SharedModule } from '@app/shared/shared.module';
import { LayoutModule } from '@layout/layout.module';
import { CreateIntroComponent } from './components/create-intro/create-intro.component';
import { CreateCarouselComponent } from './components/create-carousel/create-carousel.component';
import { CreateDownloadComponent } from './components/create-download/create-download.component';

@NgModule({
  declarations: [
    CreateComponent,
    CreateIntroComponent,
    CreateCarouselComponent,
    CreateDownloadComponent
  ],
  imports: [
    CommonModule,
    LayoutModule,
    SharedModule,
    CreateRouting
  ]
})

export class CreateModule { }
