import { Component, OnInit, Input } from '@angular/core';
import { User } from '@app/shared/interfaces/interfaces';
import { SOCIAL_PROFILE } from '@app/shared/shared.data';

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.scss']
})

export class ProfileInfoComponent implements OnInit {

  @Input() user: User;
  social = SOCIAL_PROFILE;

  constructor() { }

  ngOnInit() { }

}
