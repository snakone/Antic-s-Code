import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'image' })

export class ImagePipe implements PipeTransform {
  transform(value: string): any { return `assets/img/${value}`; }
}
