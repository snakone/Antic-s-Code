import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})

export class SectionComponent {

  @Input() title: string;
  @Input() description: string;
  @Input() input: string;

  constructor() { }

}
