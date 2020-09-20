import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Subject, Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { User } from '@shared/interfaces/interfaces';

import { UsersFacade } from '@store/users/users.facade';

@Component({
  selector: 'app-public-profile',
  templateUrl: './public-profile.component.html',
  styleUrls: ['./public-profile.component.scss']
})

export class PublicProfileComponent implements OnInit, OnDestroy {

  user$: Observable<User>;
  private unsubscribe$ = new Subject<void>();

  constructor(
    private userFacade: UsersFacade,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.user$ = this.userFacade.byName$;
    this.getUserByName();
  }

  private getUserByName(): void {
    this.route.params
     .pipe(takeUntil(this.unsubscribe$))
      .subscribe(params => this.userFacade.getByName(params.name));
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
    this.userFacade.resetByName();
  }

}
