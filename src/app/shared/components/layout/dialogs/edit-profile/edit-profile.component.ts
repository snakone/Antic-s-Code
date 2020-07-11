import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { UserService } from '@core/services/user/user.service';
import { CrafterService } from '@core/services/crafter/crafter.service';

import { ROLES, PROFILE_LANGS } from '@shared/data/user';
import { User } from '@shared/interfaces/interfaces';
import { URLPattern } from '@shared/data/patterns';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})

export class EditProfileComponent implements OnInit {

  // @Input() user: User;
  form: FormGroup;
  roles = ROLES;
  languages = PROFILE_LANGS;
  urlPattern = URLPattern;

  constructor(
    private userSrv: UserService,
    private crafter: CrafterService,
    @Inject(MAT_DIALOG_DATA) public user: User,
    private dialog: MatDialogRef<EditProfileComponent>,
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

  public onSubmit(): void {
    if (this.form.invalid) { return; }
    this.user.name = this.form.value.name;
    this.user.email = this.form.value.email;
    this.user.profile = this.form.value;
    this.editUser(this.user);
  }

  private editUser(user: User): void {
    this.userSrv.update(user).toPromise()
      .then(_ => this.crafter
        .toaster('success', 'profile.updated', 'info')
      );
  }

  public close(): void {
    this.dialog.close();
  }

}
