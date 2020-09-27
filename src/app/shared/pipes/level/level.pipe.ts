import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'levelPipe'})

export class LevelPipe implements PipeTransform {

  transform(value: string): string {
    switch (value) {
      case 'LEVEL.BASIC': return '66%';
      case 'LEVEL.MEDIUM': return '33%';
      case 'LEVEL.ADVANCED': return '0%';
      default: return '0%';
    }
  }

}
