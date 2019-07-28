import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({ name: 'sectionBg' })

export class SectionBackgroundPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  transform(value: string): any {
    return this.sanitizer.bypassSecurityTrustStyle(`background: ${value}`);
  }
}
