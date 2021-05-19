import { ChangeDetectionStrategy, OnInit, SimpleChanges } from '@angular/core';
import { Component, OnChanges, Input } from '@angular/core';
import { NewInboxComponent } from '@layout/dialogs/new-inbox/new-inbox.component';
import { CrafterService } from '@core/services/crafter/crafter.service';
import { Inbox, User } from '@shared/interfaces/interfaces';
import { InboxFacade } from '@store/inbox/inbox.facade';
import { UserService } from '@core/services/user/user.service';

@Component({
  selector: 'app-profile-inbox-right',
  templateUrl: './profile-inbox-right.component.html',
  styleUrls: ['./profile-inbox-right.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ProfileInboxRightComponent implements OnInit, OnChanges {

  @Input() inbox: Inbox;
  user: User;

  constructor(
    private inboxFacade: InboxFacade,
    private crafter: CrafterService,
    private userSrv: UserService
  ) { }

  ngOnInit() {
    this.user = this.userSrv.getUser();
  }

  ngOnChanges(e: SimpleChanges) {
    if (e.inbox?.currentValue &&
       !e.inbox.currentValue.last.read) {
      this.inboxFacade.markUnread(this.inbox?.last._id, true);
    }
  }

  public reply(): void {
    this.crafter.dialog(NewInboxComponent, this.inbox, 'new-inbox');
  }

  public new(): void {
    this.crafter.dialog(NewInboxComponent, null, 'new-inbox');
  }

  public mark(e: boolean): void {
    this.inboxFacade.markUnread(this.inbox.last._id, !e);
  }

}
