import { Component, Input } from '@angular/core';
import { InboxMessage, User } from '@shared/interfaces/interfaces';

@Component({
  selector: 'app-inbox-reply',
  templateUrl: './inbox-reply.component.html',
  styleUrls: ['./inbox-reply.component.scss']
})

export class InboxReplyComponent {

  @Input() inbox: InboxMessage;
  @Input() last: boolean;
  @Input() user: User;

  constructor() { }

}
