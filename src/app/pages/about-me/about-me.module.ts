import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutMeComponent } from './about-me.component';
import { AboutMeRouting } from './about-me.routing';
import { SharedModule } from '@app/shared/shared.module';
import { LayoutModule } from '@layout/layout.module';
import { AboutIntroComponent } from './components/about-intro/about-intro.component';
import { TimeLineComponent } from './components/time-line/time-line.component';
import { AboutSkillsComponent } from './components/about-skills/about-skills.component';

@NgModule({
  declarations: [
    AboutMeComponent,
    AboutIntroComponent,
    TimeLineComponent,
    AboutSkillsComponent],
  imports: [
    CommonModule,
    AboutMeRouting,
    LayoutModule,
    SharedModule,
  ]
})

export class AboutMeModule { }
