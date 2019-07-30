import { Component, OnInit } from '@angular/core';
import { COUNTRIES } from '@app/shared/shared.data';

@Component({
  selector: 'app-best-home-list',
  templateUrl: './best-home-list.component.html',
  styleUrls: ['./best-home-list.component.scss']
})

export class BestHomeListComponent implements OnInit {

  countries = COUNTRIES;

  constructor() { }

  ngOnInit() { }

}
