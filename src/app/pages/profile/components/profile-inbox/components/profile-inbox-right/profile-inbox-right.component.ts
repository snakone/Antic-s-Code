import { SimpleChanges } from '@angular/core';
import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { NewInboxComponent } from '@layout/dialogs/new-inbox/new-inbox.component';
import { CrafterService } from '@core/services/crafter/crafter.service';
import { InboxMessage } from '@shared/interfaces/interfaces';
import { InboxFacade } from '@store/inbox/inbox.facade';
import { UserService } from '@core/services/user/user.service';

@Component({
  selector: 'app-profile-inbox-right',
  templateUrl: './profile-inbox-right.component.html',
  styleUrls: ['./profile-inbox-right.component.scss']
})

export class ProfileInboxRightComponent implements OnInit, OnChanges {

  @Input() mail: InboxMessage;
  show = false;
  user: string;

  constructor(
    private inboxFacade: InboxFacade,
    private crafter: CrafterService,
    private userSrv: UserService
  ) { }

  ngOnInit(): void {
    this.user = this.userSrv.getUser().name;
  }

  ngOnChanges(e: SimpleChanges) {
    if (e.mail?.currentValue && !e.mail.currentValue.read) {
      this.inboxFacade.markUnread(this.mail._id, true);
    }

    this.show = false;
    setTimeout(() => {
      this.show = true;
    }, 10);
  }

  public reply(): void {
    this.crafter.dialog(NewInboxComponent, this.mail, 'new-inbox');
  }

  public new(): void {
    this.crafter.dialog(NewInboxComponent, null, 'new-inbox');
  }

  public mark(e: boolean): void {
    this.inboxFacade.markUnread(this.mail._id, !e);
  }

}
