import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'shortDate' })

export class ShortDatePipe implements PipeTransform {

  transform(value: string): string {
    return value.slice(value.length - 8, value.length);
  }

}
