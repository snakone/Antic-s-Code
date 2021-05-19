import { Component } from '@angular/core';
import { PRIVACY, PRIVACY_INDEX } from '@shared/data/privacy';

@Component({
  selector: 'app-politics',
  templateUrl: './politics.component.html',
  styleUrls: ['./politics.component.scss']
})

export class PoliticsComponent {

  privacy = PRIVACY;
  index = PRIVACY_INDEX;

  constructor() { }

}
