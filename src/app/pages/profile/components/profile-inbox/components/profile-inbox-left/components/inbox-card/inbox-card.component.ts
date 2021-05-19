import { Component, Input } from '@angular/core';
import { Inbox, InboxMessage } from '@shared/interfaces/interfaces';

@Component({
  selector: 'app-inbox-card',
  templateUrl: './inbox-card.component.html',
  styleUrls: ['./inbox-card.component.scss']
})

export class InboxCardComponent {

  @Input() inbox: InboxMessage;
  @Input() selected: Inbox;

  constructor() { }

}
