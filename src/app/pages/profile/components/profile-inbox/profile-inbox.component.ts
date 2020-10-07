import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { InboxMessage } from '@shared/interfaces/interfaces';
import { InboxFacade } from '@store/inbox/inbox.facade';
import { Observable, Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-profile-inbox',
  templateUrl: './profile-inbox.component.html',
  styleUrls: ['./profile-inbox.component.scss']
})

export class ProfileInboxComponent implements OnInit, OnDestroy {

  inbox$: Observable<InboxMessage[]>;
  selected$: Observable<InboxMessage>;
  private unsubscribe$ = new Subject<void>();

  constructor(private inboxFacade: InboxFacade) { }

  ngOnInit(): void {
    this.checkData();
    this.inbox$ = this.inboxFacade.filtered$;
    this.selected$ = this.inboxFacade.selected$;
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
    this.inboxFacade.reset();
  }

}
