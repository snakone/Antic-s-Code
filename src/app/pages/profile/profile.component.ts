import { Component, OnInit } from '@angular/core';
import { AppState } from '@app/app.config';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from '@shared/interfaces/interfaces';
import * as fromUsers from '@core/ngrx/selectors/user.selectors';
import { UsersFacade } from '@app/core/ngrx/facade/users.facade';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {

  user$: Observable<User>;

  constructor(private usersFacade: UsersFacade) { }

  ngOnInit() {
    this.user$ = this.usersFacade.user$;
  }

}
