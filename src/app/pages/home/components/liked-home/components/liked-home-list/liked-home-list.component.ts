import { Component, OnInit } from '@angular/core';
import { COUNTRIES } from '@app/shared/shared.data';

@Component({
  selector: 'app-liked-home-list',
  templateUrl: './liked-home-list.component.html',
  styleUrls: ['./liked-home-list.component.scss']
})

export class LikedHomeListComponent implements OnInit {

  countries = COUNTRIES;

  constructor() { }

  ngOnInit() { }

}
