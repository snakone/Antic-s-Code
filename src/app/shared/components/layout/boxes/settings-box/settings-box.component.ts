import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LANGUAGES, THEMES } from '@shared/shared.data';
import { StorageService } from '@core/storage/storage.service';
import { LanguageService } from '@core/language/services/language.service';
import { ThemeService } from '@core/services/theme/theme.service';
import { CrafterService } from '@core/services/crafter/crafter.service';

@Component({
  selector: 'app-settings-box',
  templateUrl: './settings-box.component.html',
  styleUrls: ['./settings-box.component.scss']
})

export class SettingsBoxComponent implements OnInit {

  settingsForm: FormGroup;
  lang: string;
  languages = LANGUAGES;
  themes = THEMES;

  constructor(
    private theme: ThemeService,
    private ls: StorageService,
    private language: LanguageService,
    private crafter: CrafterService
  ) { }

  ngOnInit() {
    this.createSettingsForm();
  }

  private createSettingsForm(): void {
    this.settingsForm = new FormGroup(
      {
        language: new FormControl(this.ls.get('lang'), [
          Validators.required
        ]),
        theme: new FormControl(this.ls.get('theme'), [
          Validators.required
        ])
      }
    );
  }

  public onSubmit(): void {
    if (this.settingsForm.invalid) { return; }
    const { lang, theme } = this.settingsForm.value;
    this.theme.set(theme);
    this.language.change(lang);
    this.crafter.toaster('updated', 'config.save', 'info');
  }

}
