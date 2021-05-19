import { ChangeDetectionStrategy, Component, AfterContentInit } from '@angular/core';
import { User } from '@shared/interfaces/interfaces';
import { UserService } from '@core/services/user/user.service';

@Component({
  selector: 'app-profile-content',
  templateUrl: './profile-content.component.html',
  styleUrls: ['./profile-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ProfileContentComponent implements AfterContentInit {

  user: User;

  constructor(private userSrv: UserService) { }

  ngAfterContentInit() {
    this.user = this.userSrv.getUser();
  }

}
