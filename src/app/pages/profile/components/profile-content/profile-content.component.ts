import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { UsersFacade } from '@store/users/users.facade';
import { User } from '@shared/interfaces/interfaces';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-profile-content',
  templateUrl: './profile-content.component.html',
  styleUrls: ['./profile-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ProfileContentComponent implements OnInit {

  user$: Observable<User>;

  constructor(private usersFacade: UsersFacade) { }

  ngOnInit() {
    this.user$ = this.usersFacade.user$;
  }

}
