import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'badge' })

export class BadgePipe implements PipeTransform {

  transform(value: string, args: string): string {
    switch (value) {
      case 'BADGE.PRO': return `badge-featured${args || ''}`;
      case 'BADGE.HOT': return `badge-popular${args || ''}`;
      case 'BADGE.NEW': return `badge-new${args || ''}`;
      case 'BADGE.CLASSIC': return `badge-classic${args || ''}`;
      case 'BADGE.LOVED': return `badge-loved${args || ''}`;
    }
  }

}
