import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LANGUAGES, THEMES } from '@shared/shared.data';
import { StorageService } from '@app/core/storage/storage.service';
import { CrafterService, ThemeService } from '@app/core/services/services.index';
import { LanguageService } from '@core/language/services/language.service';

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

  constructor(private theme: ThemeService,
              private ls: StorageService,
              private language: LanguageService,
              private crafter: CrafterService) { }

  ngOnInit() {
    this.createSettingsForm();
  }

  private createSettingsForm(): void {
    this.settingsForm = new FormGroup({
              language: new FormControl(this.ls.get('lang'), [Validators.required]),
                 theme: new FormControl(this.ls.get('theme'), [Validators.required]),
    });
  }

  onSubmit(): void {
    if (this.settingsForm.invalid) { return; }

    const lang = this.settingsForm.value.language;
    const theme = this.settingsForm.value.theme;

    this.theme.remove(this.ls.get('theme'));
    this.theme.set(theme);
    this.language.change(lang);
    this.crafter.toaster('updated', 'config.save', 'info');
  }

}
