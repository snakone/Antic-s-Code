import { Component, OnInit } from '@angular/core';
import { MY_SKILLS_LOGO, MY_SKILLS } from '@app/shared/shared.data';

@Component({
  selector: 'app-about-skills',
  templateUrl: './about-skills.component.html',
  styleUrls: ['./about-skills.component.scss']
})

export class AboutSkillsComponent implements OnInit {

  skillsIcon = MY_SKILLS_LOGO;
  skills = MY_SKILLS;

  constructor() { }

  ngOnInit() { }

}
