import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '@shared/interfaces/interfaces';
import { UsersFacade } from '@store/users/users.facade';

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
