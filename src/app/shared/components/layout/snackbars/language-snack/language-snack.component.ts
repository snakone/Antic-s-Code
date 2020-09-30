import { Component } from '@angular/core';
import { MatSnackBarRef } from '@angular/material/snack-bar';

import { LanguageService } from '@core/language/services/language.service';
import { StorageService } from '@core/storage/storage.service';

@Component({
  selector: 'app-language-snack',
  templateUrl: './language-snack.component.html',
  styleUrls: ['./language-snack.component.scss']
})

export class LanguageSnackComponent {

  constructor(
    private lang: LanguageService,
    private ls: StorageService,
    public snackbar: MatSnackBarRef<LanguageSnackComponent>
  ) { }

  public closeSnackBar(): void {
    this.snackbar.dismiss();
  }

  public setLanguage(value?: string): void {
    this.ls.setKey('skip_lang', true);
    if (value) {
      this.lang.change(value);
      this.ls.setKey('lang', value);
    }
    this.closeSnackBar();
  }

}
