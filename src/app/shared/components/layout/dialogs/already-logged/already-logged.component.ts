import { Component } from '@angular/core';
import { UserService } from '@core/services/user/user.service';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-already-logged',
  templateUrl: './already-logged.component.html',
  styleUrls: ['./already-logged.component.scss']
})

export class AlreadyLoggedComponent {

  constructor(
    private user: UserService,
    private router: Router,
    private dialog: MatDialogRef<AlreadyLoggedComponent>
  ) { }

  public logOut(): void {
    this.router.navigateByUrl('/home')
    .then(() => {
      this.user.logout();
      this.dialog.close();
    });
  }

}
