import { Component } from '@angular/core';
import { COUNTRIES } from '@shared/shared.data';

@Component({
  selector: 'app-liked-home-list',
  templateUrl: './liked-home-list.component.html',
  styleUrls: ['./liked-home-list.component.scss']
})

export class LikedHomeListComponent {

  countries = COUNTRIES;

  constructor() { }

}
