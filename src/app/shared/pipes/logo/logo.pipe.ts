import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'logo'})

export class LogoPipe implements PipeTransform {

  transform(value: string): string {
    switch (value) {
      case 'HTML': return 'html-logo.png';
      case 'CSS': return 'css-logo.png';
      case 'Javascript': return 'javascript-logo.png';
      case 'Angular': return 'angular-logo.png';
      case 'Nodejs': return 'node-logo.png';
      case 'MongoDB': return 'mongo-logo.png';
      default: return value;
    }
  }

}
