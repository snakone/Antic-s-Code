import { Injectable } from '@angular/core';
import { AsyncValidator, AbstractControl, ValidationErrors } from '@angular/forms';
import { UserService } from '@core/services/user/user.service';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })

export class UniqueEmailValidator implements AsyncValidator {

  constructor(private userSrv: UserService) {}

  public validate(
    ctrl: AbstractControl
  ): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return this.userSrv.isEmailTaken(ctrl.value).pipe(
      map(res => res.ok ? null : { taken: true }),
      catchError(() => of(null))
    );
  }
}
