import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '@app/core/services/user/user.service';
import { User } from '@app/shared/interfaces/interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-content',
  templateUrl: './profile-content.component.html',
  styleUrls: ['./profile-content.component.scss']
})

export class ProfileContentComponent implements OnInit {

  @Input() user: User;

  constructor(private userService: UserService,
              private router: Router) { }

  ngOnInit() { }

  logOut(): void {
    this.router.navigateByUrl('/home');
    this.userService.logout();
  }

}
