import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'image'})

export class ImagePipe implements PipeTransform {
  transform(value: string, args?: string): string {
    if (args) { return `assets/img/${args}/${value}`; }
    return `assets/img/${value}`;
  }
}
