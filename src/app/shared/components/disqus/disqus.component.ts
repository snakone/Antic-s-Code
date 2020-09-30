import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { StorageService } from '@core/storage/storage.service';

@Component({
  selector: 'app-disqus',
  templateUrl: './disqus.component.html',
  styleUrls: ['./disqus.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class DisqusComponent {

  @Input() identifier: string;

  constructor(public ls: StorageService) { }

  public getLanguage(): string {
    switch (this.ls.get('lang')) {
      case 'es': return 'es_ES';
      default: return '';
    }
  }

}
