import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({name: 'background'})

export class BackgroundPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  transform(value: string): any { // BG COLOR
    if (!value || !value.startsWith('#')) { return; }
    return this.sanitizer.bypassSecurityTrustStyle(`background: ${value}`);
  }
}
