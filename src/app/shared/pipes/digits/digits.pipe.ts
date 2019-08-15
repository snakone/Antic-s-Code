import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'digits' })

export class DigitsPipe implements PipeTransform {
  transform(value: number, args?: any): any {
    if (value >= 100) { return value; }
    if (value >= 10) { return '0' + value; }
    return '00' + value;
  }
}
