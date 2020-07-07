import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { UsersFacade } from '@core/ngrx/facade/users.facade';

import { takeUntil, filter } from 'rxjs/operators';
import { MostActive } from '@shared/interfaces/interfaces';

@Component({
  selector: 'app-most-active-box',
  templateUrl: './most-active-box.component.html',
  styleUrls: ['./most-active-box.component.scss']
})

export class MostActiveBoxComponent implements OnInit, OnDestroy {

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
