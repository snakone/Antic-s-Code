import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { StorageService } from '@core/storage/storage.service';
import { LanguageService } from '@core/language/services/language.service';
import { ThemeService } from '@core/services/theme/theme.service';
import { CrafterService } from '@core/services/crafter/crafter.service';
import { UserService } from '@core/services/user/user.service';

import { User } from '@shared/interfaces/interfaces';
import { LANGUAGES, THEMES } from '@shared/data/app';
import { SHOW_HIDE } from '@shared/data/user';

@Component({
  selector: 'app-settings-box',
  templateUrl: './settings-box.component.html',
  styleUrls: ['./settings-box.component.scss']
})

export class SettingsBoxComponent implements OnInit {

  @Input() user: User;
  settingsForm: FormGroup;
  lang: string;
  languages = LANGUAGES;
  themes = THEMES;
  show = SHOW_HIDE;

  constructor(
    private theme: ThemeService,
    private ls: StorageService,
    private language: LanguageService,
    private crafter: CrafterService,
    private userSrv: UserService
  ) { }

  ngOnInit() {
    this.createSettingsForm();
  }

  private createSettingsForm(): void {
    this.settingsForm = new FormGroup(
      {
        language: new FormControl(
          this.ls.get('lang'), [
          Validators.required
        ]),
        theme: new FormControl(
          this.ls.get('theme'), [
          Validators.required
        ]),
        email: new FormControl(
          this.userSrv.getUser().showEmail, [
          Validators.required
        ]),
        chat: new FormControl(this.ls.get('chat'), [
          Validators.required
        ])
      }
    );
  }

  public onSubmit(): void {
    if (this.settingsForm.invalid) { return; }
    const { language, theme, email, chat } = this.settingsForm.value;
    this.theme.set(theme);
    this.language.change(language);
    this.user.showEmail = email;
    this.ls.setKey('chat', chat);
    this.userSrv.update(this.user).toPromise()
     .then(_ => this.crafter.toaster('UPDATED', 'CONFIG.SAVE', 'info'));
  }

}
