import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Inbox } from '@shared/interfaces/interfaces';

@Component({
  selector: 'app-inbox-header',
  templateUrl: './inbox-header.component.html',
  styleUrls: ['./inbox-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class InboxHeaderComponent {

  @Input() inbox: Inbox;

  constructor() { }

}
