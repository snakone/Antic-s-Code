import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { MostActive } from '@shared/interfaces/interfaces';

import { takeUntil, filter } from 'rxjs/operators';
import { UsersFacade } from '@core/ngrx/facade/users.facade';

@Component({
  selector: 'app-most-active-users',
  templateUrl: './most-active-users.component.html',
  styleUrls: ['./most-active-users.component.scss']
})

export class MostActiveUsersComponent implements OnInit, OnDestroy {

  activeUsers$: Observable<MostActive[]>;
  private unsubscribe$ = new Subject<void>();

  constructor(private usersFacade: UsersFacade) { }

  ngOnInit() {
   this.checkData();
   this.activeUsers$ = this.usersFacade.mostActive$;
  }

  private checkData(): void {
    this.usersFacade.mostActiveLoaded$
     .pipe(
       takeUntil(this.unsubscribe$),
       filter(res => !res)
      )
     .subscribe(_ => this.usersFacade.getMostActive());
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
