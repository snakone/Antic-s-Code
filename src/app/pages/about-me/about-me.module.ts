import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutMeComponent } from './about-me.component';
import { AboutMeRouting } from './about-me.routing';
import { SharedModule } from '@app/shared/shared.module';
import { LayoutModule } from '@layout/layout.module';
import { AboutIntroComponent } from './components/about-intro/about-intro.component';
import { TimeLineComponent } from './components/time-line/time-line.component';
import { AboutSkillsComponent } from './components/about-skills/about-skills.component';
import { AboutContactComponent } from './components/about-contact/about-contact.component';
import { HomeModule } from '../home/home.module';

@NgModule({
  declarations: [
    AboutMeComponent,
    AboutIntroComponent,
    TimeLineComponent,
    AboutSkillsComponent,
    AboutContactComponent],
  imports: [
    CommonModule,
    AboutMeRouting,
    LayoutModule,
    SharedModule,
    HomeModule
  ]
})

export class AboutMeModule { }
