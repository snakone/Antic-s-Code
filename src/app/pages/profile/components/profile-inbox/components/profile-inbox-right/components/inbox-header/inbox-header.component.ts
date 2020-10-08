import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Inbox } from '@app/shared/interfaces/interfaces';

@Component({
  selector: 'app-inbox-header',
  templateUrl: './inbox-header.component.html',
  styleUrls: ['./inbox-header.component.scss']
})

export class InboxHeaderComponent {

  @Input() inbox: Inbox;

  constructor() { }

}
