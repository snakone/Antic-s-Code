import { Component, Input } from '@angular/core';
import { InboxMessage } from '@shared/interfaces/interfaces';

@Component({
  selector: 'app-message-card',
  templateUrl: './message-card.component.html',
  styleUrls: ['./message-card.component.scss']
})

export class MessageCardComponent {

  @Input() inbox: InboxMessage;
  @Input() selected: InboxMessage;

  constructor() { }

}
