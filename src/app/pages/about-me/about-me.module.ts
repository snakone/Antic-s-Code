import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutMeComponent } from './about-me.component';
import { AboutMeRouting } from './about-me.routing';

import { SharedModule } from '@shared/shared.module';
import { LayoutModule } from '@layout/layout.module';

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
    LayoutModule,
    SharedModule,
    ...Material
  ]
})

export class AboutMeModule { }
