import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({name: 'sanitizer'})

export class SanitizerPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) { }

  transform(value: string, args?: string): any {
    if (args) {
      if (args === 'html') {
        return this.sanitizer.bypassSecurityTrustHtml(value);
      } else if (args === 'style') {
        return this.sanitizer.bypassSecurityTrustStyle(value);
      }
    } else { return value; }
  }

}
