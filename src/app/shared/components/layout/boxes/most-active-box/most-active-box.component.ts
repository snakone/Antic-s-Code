import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { UserStats } from '@shared/interfaces/interfaces';
import { StatsFacade } from '@core/ngrx/stats/stats.facade';

@Component({
  selector: 'app-most-active-box',
  templateUrl: './most-active-box.component.html',
  styleUrls: ['./most-active-box.component.scss']
})

export class MostActiveBoxComponent implements OnInit {

  stats$: Observable<UserStats[]>;

  constructor(private statsFacade: StatsFacade) { }

  ngOnInit() {
   this.stats$ = this.statsFacade.articles$;
  }

}
