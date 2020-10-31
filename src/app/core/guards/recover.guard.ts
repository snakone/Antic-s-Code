import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CrafterService } from '../services/crafter/crafter.service';
import { UserService } from '../services/user/user.service';

@Injectable({providedIn: 'root'})

export class RecoverGuard implements CanActivate {

  constructor(
    private userSrv: UserService,
    private crafter: CrafterService,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot
  ): Observable<boolean> {
      return this.userSrv.verifyEmailToken(route.params.token)
       .pipe(map(res => !res ? (this.showModal(), false) : true));
  }

  private showModal(): void {
    this.crafter.modal(
      'ERRORS.EMAIL_TOKEN.TITLE',
      'ERRORS.EMAIL_TOKEN.MESSAGE',
      'info');
    this.router.navigateByUrl('/');
  }

}
