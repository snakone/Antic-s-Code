import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { User } from '@shared/interfaces/interfaces';
import { AppState } from '@app/app.config';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { takeUntil } from 'rxjs/operators';

import * as fromUsers from '@core/ngrx/selectors/user.selectors';
import * as UserActions from '@core/ngrx/actions/user.actions';

@Component({
  selector: 'app-public-profile',
  templateUrl: './public-profile.component.html',
  styleUrls: ['./public-profile.component.scss']
})

export class PublicProfileComponent implements OnInit, OnDestroy {

  user$: Observable<User>;
  private unsubscribe$ = new Subject<void>();

  constructor(
    private store: Store<AppState>,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.user$ = this.store.select(fromUsers.getByName);
    this.getUserByName();
  }

  private getUserByName(): void {
    this.route.params
     .pipe(takeUntil(this.unsubscribe$))
      .subscribe(params => {
        this.store.dispatch(
          UserActions.getByName({ name: params.name })
        );
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
    this.store.dispatch(UserActions.resetUserName());
  }

}
