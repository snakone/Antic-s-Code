import { ChangeDetectionStrategy, Component, AfterContentInit } from '@angular/core';
import { User, UserStats } from '@shared/interfaces/interfaces';
import { Observable } from 'rxjs';
import { StatsFacade } from '@store/stats/stats.facade';
import { UserService } from '@core/services/user/user.service';

@Component({
  selector: 'app-profile-content',
  templateUrl: './profile-content.component.html',
  styleUrls: ['./profile-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ProfileContentComponent implements AfterContentInit {

  user: User;
  stats$: Observable<UserStats>;

  constructor(
    private userSrv: UserService,
    private statsFacade: StatsFacade
  ) { }

  ngAfterContentInit() {
    this.user = this.userSrv.getUser();
    this.stats$ = this.statsFacade.byUser$;
  }

}
