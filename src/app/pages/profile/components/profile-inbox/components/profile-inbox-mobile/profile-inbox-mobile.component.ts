import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { InboxMessagesComponent } from '@layout/dialogs/inbox-messages/inbox-messages.component';
import { InboxFacade } from '@core/ngrx/inbox/inbox.facade';
import { CrafterService } from '@core/services/crafter/crafter.service';
import { NewInboxComponent } from '@layout/dialogs/new-inbox/new-inbox.component';
import { Inbox, InboxMessage } from '@shared/interfaces/interfaces';

@Component({
  selector: 'app-profile-inbox-mobile',
  templateUrl: './profile-inbox-mobile.component.html',
  styleUrls: ['./profile-inbox-mobile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ProfileInboxMobileComponent implements OnInit {

  @Input() filtered: Inbox[];
  @Input() selected: InboxMessage;

  constructor(
    private inboxFacade: InboxFacade,
    private crafter: CrafterService
  ) { }

  ngOnInit(): void {
  }

  public search(e: string): void {
    this.inboxFacade.filter(e);
  }

  public set(m: Inbox): void {
    this.crafter.dialog(InboxMessagesComponent, m, 'inbox-messages');
  }

  public new(): void {
    this.crafter.dialog(NewInboxComponent, null, 'new-inbox');
  }

  public reload(): void {
    this.inboxFacade.reset();
  }

}
