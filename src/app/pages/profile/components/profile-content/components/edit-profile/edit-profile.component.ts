import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { User } from '@app/shared/interfaces/interfaces';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ROLES, PROFILE_LANGS } from '@app/shared/shared.data';
import { UserService, CrafterService } from '@app/core/services/services.index';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { UserResponse } from '@shared/interfaces/interfaces';
import { StorageService } from '@app/core/storage/storage.service';
import * as UserActions from '@core/ngrx/actions/user.actions';
import { Store } from '@ngrx/store';
import { AppState } from '@app/app.config';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})

export class EditProfileComponent implements OnInit, OnDestroy {

  @Input() user: User;
  editProfileForm: FormGroup;
  roles = ROLES;
  languages = PROFILE_LANGS;
  urlPattern = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';
  private unsubscribe$ = new Subject<void>();

  constructor(private userService: UserService,
              private store: Store<AppState>,
              private crafter: CrafterService,
              private ls: StorageService) { }

  ngOnInit() {
    this.createArticleForm();
   }

  private createArticleForm(): void {
    this.editProfileForm = new FormGroup({
              name: new FormControl(this.user.name || null, [Validators.required]),
             email: new FormControl(this.user.email || null, [Validators.required,
                                                              Validators.email]),
               rol: new FormControl(this.user.profile.rol || null, []),
               bio: new FormControl(this.user.profile.bio || null, []),
            avatar: new FormControl(this.user.profile.avatar || null,
                                    [Validators.pattern(this.urlPattern)]),
           twitter: new FormControl(this.user.profile.twitter || null,
                                    [Validators.pattern(this.urlPattern)]),
            github: new FormControl(this.user.profile.github || null,
                                    [Validators.pattern(this.urlPattern)]),
         portfolio: new FormControl(this.user.profile.portfolio || null,
                                    [Validators.pattern(this.urlPattern)]),
          language: new FormControl(this.user.profile.language || null, []),
    });
  }

  onSubmit(): void {
    if (this.editProfileForm.invalid) { return; }
    this.user.name = this.editProfileForm.value.name;
    this.user.email = this.editProfileForm.value.email;
    this.user.profile.rol = this.editProfileForm.value.rol;
    this.user.profile.bio = this.editProfileForm.value.bio;
    this.user.profile.avatar = this.editProfileForm.value.avatar;
    this.user.profile.facebook = this.editProfileForm.value.facebook;
    this.user.profile.twitter = this.editProfileForm.value.twitter;
    this.user.profile.github = this.editProfileForm.value.github;
    this.user.profile.portfolio = this.editProfileForm.value.portfolio;
    this.user.profile.language = this.editProfileForm.value.language;
    this.editUser(this.user);
  }

  private editUser(user: User): void {
    this.userService.updateUser(user)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((res: UserResponse) => {
        if (res.ok) {
          this.store.dispatch(UserActions.setUser({ user: res.user }));
          this.ls.setKey('token', res.token);
          this.crafter.toaster('success', 'profile.updated', 'info');
        }
      },
        (err: HttpErrorResponse) => {
          err.status === 0 ?
          this.handleError('server') : this.handleError();
      });
  }

  private handleError(type?: string): void {
    if (type === 'server') {
      this.crafter.toaster('server.error',
                           'server.bad',
                           'error');
    } else {
      this.crafter.toaster('update.failed',
                           'try.again',
                           'error');
    }
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
