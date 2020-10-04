import { Input } from '@angular/core';
import { Component } from '@angular/core';
import { CrafterService } from '@core/services/crafter/crafter.service';
import { InboxFacade } from '@store/inbox/inbox.facade';
import { InboxMessage } from '@shared/interfaces/interfaces';
import { NewInboxComponent } from '@layout/dialogs/new-inbox/new-inbox.component';

@Component({
  selector: 'app-profile-inbox-left',
  templateUrl: './profile-inbox-left.component.html',
  styleUrls: ['./profile-inbox-left.component.scss']
})

export class ProfileInboxLeftComponent {

  @Input() filtered: InboxMessage[];
  @Input() selected: InboxMessage;

  constructor(
    private inboxFacade: InboxFacade,
    private crafter: CrafterService
  ) { }

  public search(e: any): void {
    this.inboxFacade.filter(e.target.value);
  }

  public set(m: InboxMessage): void {
    this.inboxFacade.set(m);
  }

  public new(): void {
    this.crafter.dialog(NewInboxComponent, null, 'new-inbox');
  }

  public reload(): void {
    this.inboxFacade.reset();
  }

}