import { Component, OnInit } from '@angular/core';
import { UserService } from '@app/core/services/services.index';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-actions',
  templateUrl: './profile-actions.component.html',
  styleUrls: ['./profile-actions.component.scss']
})

export class ProfileActionsComponent implements OnInit {

  constructor(private userService: UserService,
              private router: Router) { }

  ngOnInit() { }

  delete(): void {
    console.log('delete');
  }

  logOut(): void {
    this.router.navigateByUrl('/home')
      .then(() => this.userService.logout());
  }

}
