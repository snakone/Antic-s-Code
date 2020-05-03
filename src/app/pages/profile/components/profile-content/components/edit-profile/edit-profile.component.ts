import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { User } from '@shared/interfaces/interfaces';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ROLES, PROFILE_LANGS } from '@shared/shared.data';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { UserResponse } from '@shared/interfaces/interfaces';
import { StorageService } from '@app/core/storage/storage.service';
import * as UserActions from '@core/ngrx/actions/user.actions';
import { Store } from '@ngrx/store';
import { AppState } from '@app/app.config';
import { UserService } from '@core/services/user/user.service';
import { CrafterService } from '@core/services/crafter/crafter.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})

export class EditProfileComponent implements OnInit, OnDestroy {

  @Input() user: User;
  form: FormGroup;
  roles = ROLES;
  languages = PROFILE_LANGS;
  urlPattern = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';
  private unsubscribe$ = new Subject<void>();

  constructor(
    private userSrv: UserService,
    private store: Store<AppState>,
    private crafter: CrafterService,
    private ls: StorageService
  ) { }

  ngOnInit() {
    this.createEditForm();
  }

  private createEditForm(): void {
    this.form = new FormGroup({
      name: new FormControl(
        this.user.name || null,
        [Validators.required]
      ),
      email: new FormControl(
        this.user.email || null,
        [Validators.required, Validators.email]
      ),
      rol: new FormControl(
        this.user.profile.rol || null, []
      ),
      bio: new FormControl(
        this.user.profile.bio || null, []
      ),
      avatar: new FormControl(
        this.user.profile.avatar || null,
        [Validators.pattern(this.urlPattern)]
      ),
      twitter: new FormControl(
        this.user.profile.twitter || null,
        [Validators.pattern(this.urlPattern)]
      ),
      github: new FormControl(
        this.user.profile.github || null,
        [Validators.pattern(this.urlPattern)]
      ),
      portfolio: new FormControl(
        this.user.profile.portfolio || null,
        [Validators.pattern(this.urlPattern)]
      ),
      language: new FormControl(
        this.user.profile.language || null, []
      )
    });
  }

  onSubmit(): void {
    if (this.form.invalid) { return; }
    this.user.name = this.form.value.name;
    this.user.email = this.form.value.email;
    this.user.profile = this.form.value;
    this.editUser(this.user);
  }

  private editUser(user: User): void {
    this.userSrv.update(user)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((res: UserResponse) => this.editSuccess(res));
  }

  private editSuccess(data: UserResponse): void {
    this.store.dispatch(UserActions.set({ user: data.user }));
    this.ls.setKey('token', data.token);
    this.crafter.toaster('success', 'profile.updated', 'info');
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
