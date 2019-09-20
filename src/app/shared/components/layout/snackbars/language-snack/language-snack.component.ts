import { Component, OnInit } from '@angular/core';
import { MatSnackBarRef } from '@angular/material/snack-bar';
import { LanguageService } from '@app/core/language/services/language.service';
import { StorageService } from '@app/core/storage/storage.service';

@Component({
  selector: 'app-language-snack',
  templateUrl: './language-snack.component.html',
  styleUrls: ['./language-snack.component.scss']
})
export class LanguageSnackComponent implements OnInit {

  constructor(private lang: LanguageService,
              private ls: StorageService,
              public snackbar: MatSnackBarRef<LanguageSnackComponent>) { }

  ngOnInit() {
  }

  closeSnackBar(): void {
    this.snackbar.dismiss();
  }

  setLanguage(value?: string): void {
    this.ls.setKey('user_lang', true);
    if (value) {
      this.lang.change('en');
      this.ls.setKey('lang', value);
    }
    this.closeSnackBar();
  }

}
