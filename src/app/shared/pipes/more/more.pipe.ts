import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Pipe({name: 'more'})

export class MorePipe implements PipeTransform {

  constructor(private translate: TranslateService) {}
  transform(value: string): string {
    return `${value} <span>${this.translate.instant('READ.MORE')}</span>`;
  }
}
