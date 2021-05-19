import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { Inbox, InboxMessage } from '@shared/interfaces/interfaces';
import { InboxFacade } from '@store/inbox/inbox.facade';
import { Observable, Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-profile-inbox',
  templateUrl: './profile-inbox.component.html',
  styleUrls: ['./profile-inbox.component.scss']
})

export class ProfileInboxComponent implements OnInit, OnDestroy {

  inbox$: Observable<Inbox[]>;
  selected$: Observable<Inbox>;

  constructor(private inboxFacade: InboxFacade) { }

  ngOnInit(): void {
    this.inbox$ = this.inboxFacade.filtered$;
    this.selected$ = this.inboxFacade.selected$;
  }

  ngOnDestroy(): void {
    this.inboxFacade.reset();
  }

}
