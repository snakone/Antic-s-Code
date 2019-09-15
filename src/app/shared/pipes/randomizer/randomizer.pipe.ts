import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'randomizer'})

export class RandomizerPipe implements PipeTransform {
  transform(value: any[]): any[] {
    return value
          .map((a) => ({ sort: Math.random(), value: a }))
          .sort((a, b) => a.sort - b.sort)
          .map((a) => a.value);
  }
}
