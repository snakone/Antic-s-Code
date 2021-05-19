import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateRouting } from './create.routing';
import { CreateComponent } from './create.component';
import { SharedModule } from '@shared/shared.module';

import { CreateIntroDesktopComponent } from './components/create-intro-desktop/create-intro-desktop.component';
import { CreateCarouselDesktopComponent } from './components/create-carousel-desktop/create-carousel-desktop.component';
import { CreateDownloadComponent } from './components/create-download/create-download.component';

import { MatButtonModule } from '@angular/material/button';
import { PageHeaderModule } from '@layout/page-header/page-header.module';
import { SectionModule } from '@layout/section/section.module';
import { CarouselModule } from '@layout/carousel/carousel.module';
import { CreateIntroMobileComponent } from './components/create-intro-mobile/create-intro-mobile.component';
import { CreateCarouselMobileComponent } from './components/create-carousel-mobile/create-carousel-mobile.component';

const Material = [
  MatButtonModule
];

@NgModule({
  declarations: [
    CreateComponent,
    CreateIntroDesktopComponent,
    CreateCarouselDesktopComponent,
    CreateDownloadComponent,
    CreateIntroMobileComponent,
    CreateCarouselMobileComponent
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
