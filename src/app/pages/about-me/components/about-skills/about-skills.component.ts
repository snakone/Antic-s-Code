import { Component } from '@angular/core';
import { MY_SOFT_SKILLS, MY_HARD_SKILLS } from '@app/shared/shared.data';

@Component({
  selector: 'app-about-skills',
  templateUrl: './about-skills.component.html',
  styleUrls: ['./about-skills.component.scss']
})

export class AboutSkillsComponent {

  softSkills = MY_SOFT_SKILLS;
  hardSkills = MY_HARD_SKILLS;

  constructor() { }

}
