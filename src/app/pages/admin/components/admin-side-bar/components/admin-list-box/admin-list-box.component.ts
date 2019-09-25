import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from '@app/core/services/services.index';
import { map } from 'rxjs/operators';
import { UserResponse, User } from '@app/shared/interfaces/interfaces';

@Component({
  selector: 'app-admin-list-box',
  templateUrl: './admin-list-box.component.html',
  styleUrls: ['./admin-list-box.component.scss']
})

export class AdminListBoxComponent implements OnInit {

  admins$: Observable<User[]>;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getAdmins();
   }

  private getAdmins(): void {
    this.admins$ = this.userService.getUsers()
      .pipe(map((res: UserResponse) => {
        if (res.ok) {
          return res.users.filter((user: User) => {
            if (user.account === 'Admin' || user.account === 'Super') {
              return user;
            }
          });
        }
    }));
  }

}
