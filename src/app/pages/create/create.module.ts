import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateRouting } from './create.routing';
import { CreateComponent } from './create.component';
import { SharedModule } from '@shared/shared.module';

import { CreateIntroComponent } from './components/create-intro/create-intro.component';
import { CreateCarouselComponent } from './components/create-carousel/create-carousel.component';
import { CreateDownloadComponent } from './components/create-download/create-download.component';

import { MatButtonModule } from '@angular/material/button';
import { PageHeaderModule } from '@layout/page-header/page-header.module';
import { SectionModule } from '@layout/section/section.module';
import { CarouselModule } from '@layout/carousel/carousel.module';

const Material = [
  MatButtonModule
];

@NgModule({
  declarations: [
    CreateComponent,
    CreateIntroComponent,
    CreateCarouselComponent,
    CreateDownloadComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CreateRouting,
    PageHeaderModule,
    SectionModule,
    CarouselModule,
    ...Material
  ]
})

export class CreateModule { }
