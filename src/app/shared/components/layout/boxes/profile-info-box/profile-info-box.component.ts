import { Component, Input } from '@angular/core';
import { User } from '@app/shared/interfaces/interfaces';
import { SOCIAL_PROFILE } from '@app/shared/shared.data';

@Component({
  selector: 'app-profile-info-box',
  templateUrl: './profile-info-box.component.html',
  styleUrls: ['./profile-info-box.component.scss']
})

export class ProfileInfoBoxComponent {

  @Input() user: User;
  social = SOCIAL_PROFILE;

  constructor() { }

}
