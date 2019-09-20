import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '@app/core/services/user/user.service';
import { User } from '@app/shared/interfaces/interfaces';

@Component({
  selector: 'app-profile-content',
  templateUrl: './profile-content.component.html',
  styleUrls: ['./profile-content.component.scss']
})

export class ProfileContentComponent implements OnInit {

  @Input() user: User;

  constructor(private userService: UserService) { }

  ngOnInit() { }

  logOut(): void {
    this.userService.logout();
  }

}
