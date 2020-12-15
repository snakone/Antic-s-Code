import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { User, UserStats } from '@shared/interfaces/interfaces';
import { StatsFacade } from '@core/ngrx/stats/stats.facade';
import { UserService } from '@core/services/user/user.service';

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
