import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MY_SOFT_SKILLS, MY_HARD_SKILLS } from '@shared/data/me';

@Component({
  selector: 'app-about-skills',
  templateUrl: './about-skills.component.html',
  styleUrls: ['./about-skills.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class AboutSkillsComponent {

  softSkills = MY_SOFT_SKILLS;
  hardSkills = MY_HARD_SKILLS;

  constructor() { }

}
