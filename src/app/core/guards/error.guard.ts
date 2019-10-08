import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ErrorGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (!next.queryParams.error) {
      this.router.navigateByUrl('/home');
      return false;
    }
    return true;
  }

}
