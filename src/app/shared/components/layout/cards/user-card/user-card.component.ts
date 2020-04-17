import { Component, Input } from '@angular/core';
import { User } from '@app/shared/interfaces/interfaces';
import { SOCIAL_PROFILE } from '@app/shared/shared.data';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})

export class UserCardComponent {

  @Input() user: User;
  @Input() skeleton: boolean;
  @Input() last: boolean;
  social = SOCIAL_PROFILE;

  constructor() { }

}
