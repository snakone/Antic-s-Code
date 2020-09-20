import { Component, } from '@angular/core';
import { CREATE_STEPS } from '@shared/data/download';

@Component({
  selector: 'app-create-intro',
  templateUrl: './create-intro.component.html',
  styleUrls: ['./create-intro.component.scss']
})

export class CreateIntroComponent {

  steps = CREATE_STEPS;

  constructor() { }

}
