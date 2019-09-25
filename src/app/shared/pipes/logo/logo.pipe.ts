import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'logo'})

export class LogoPipe implements PipeTransform {
  transform(value: string): string {
    if (value === 'Nodejs') { value = 'node'; }
    return `${value.toLowerCase()}-logo.png`;
  }
}
