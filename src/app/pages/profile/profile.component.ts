import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { User } from '@shared/interfaces/interfaces';
import { UsersFacade } from '@store/users/users.facade';
import { InboxFacade } from '@app/core/ngrx/inbox/inbox.facade';
import { filter, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit, OnDestroy {

  user$: Observable<User>;
  private unsubscribe$ = new Subject<void>();

  constructor(
    private usersFacade: UsersFacade,
    private inboxFacade: InboxFacade
  ) { }

  ngOnInit() {
    this.user$ = this.usersFacade.user$;
    this.checkData();
  }

  private checkData(): void {
    this.inboxFacade.inboxLoaded$
     .pipe(
       filter(res => !res),
       takeUntil(this.unsubscribe$)
      )
     .subscribe(_ => this.inboxFacade.get());
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
