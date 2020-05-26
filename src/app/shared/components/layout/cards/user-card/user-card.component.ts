import { Component, Input } from '@angular/core';
import { User } from '@shared/interfaces/interfaces';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})

export class UserCardComponent {

  @Input() user: User;
  @Input() skeleton: boolean;
  @Input() last: boolean;

  constructor() { }

}
