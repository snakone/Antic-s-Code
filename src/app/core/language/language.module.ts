import { ModuleWithProviders, NgModule } from '@angular/core';
import { LanguageService } from '@app/core/language/services/language.service';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [TranslateModule]
})

export class LanguageModule {
  constructor(public language: LanguageService) {}
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: LanguageModule,
      providers: [
        LanguageService
      ]
    };
  }
}
