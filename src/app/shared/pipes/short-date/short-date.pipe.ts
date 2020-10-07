import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'shortDate' })

export class ShortDatePipe implements PipeTransform {

  transform(value: string): string {
    return value.slice(value.length - 9, value.length);
  }

}
