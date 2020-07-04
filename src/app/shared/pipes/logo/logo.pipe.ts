import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'logo'})

export class LogoPipe implements PipeTransform {
  transform(value: string): string {
    if (value === 'Nodejs') value = 'node';
    else if (value === 'MongoDB') value = 'mongo';
    else if (value === 'Antic\'s') value = 'antics';
    return `${value.toLowerCase()}-logo.png`;
  }
}
