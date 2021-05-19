import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { UsersFacade } from '@store/users/users.facade';
import { User } from '@shared/interfaces/interfaces';
import { Observable, Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-last-user-box',
  templateUrl: './last-user-box.component.html',
  styleUrls: ['./last-user-box.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class LastUserBoxComponent implements OnInit, OnDestroy {

  user$: Observable<User>;
  private unsubscribe$ = new Subject<void>();

  constructor(private usersFacade: UsersFacade) { }

  ngOnInit() {
    this.checkData();
    this.user$ = this.usersFacade.last$;
  }

  private checkData(): void {
    this.usersFacade.lastLoaded$
     .pipe(
       filter(res => !res),
       takeUntil(this.unsubscribe$)
      )
      .subscribe(_ => this.usersFacade.getLast());
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
