import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutMeComponent } from './about-me.component';
import { AboutMeRouting } from './about-me.routing';

import { SharedModule } from '@shared/shared.module';

import { AboutIntroComponent } from './components/about-intro/about-intro.component';
import { TimeLineComponent } from './components/time-line/time-line.component';
import { AboutSkillsComponent } from './components/about-skills/about-skills.component';
import { AboutContactComponent } from './components/about-contact/about-contact.component';
import { AboutWorkComponent } from './components/about-work/about-work.component';
import { AboutGoalComponent } from './components/about-goal/about-goal.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { SectionModule } from '@layout/section/section.module';
import { PageHeaderModule } from '@layout/page-header/page-header.module';
import { ContactMeModule } from '@shared/components/snippets/contact-me/contact-me.module';

const Material = [
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatButtonModule
];

@NgModule({
  declarations: [
    AboutMeComponent,
    AboutIntroComponent,
    TimeLineComponent,
    AboutSkillsComponent,
    AboutContactComponent,
    AboutWorkComponent,
    AboutGoalComponent
  ],
  imports: [
    CommonModule,
    AboutMeRouting,
    SharedModule,
    ...Material,
    SectionModule,
    PageHeaderModule,
    ContactMeModule
  ]
})

export class AboutMeModule { }
