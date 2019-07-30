import { Component, OnInit } from '@angular/core';
import { PLACES } from '@app/shared/shared.data';

@Component({
  selector: 'app-best-home-grid',
  templateUrl: './best-home-grid.component.html',
  styleUrls: ['./best-home-grid.component.scss']
})

export class BestHomeGridComponent implements OnInit {

  places = PLACES;

  constructor() { }

  ngOnInit() { }

}
