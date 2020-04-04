import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'rol'})

export class RolPipe implements PipeTransform {
  transform(value: string, args?: any): any {
    switch (value) {
      case 'Super':  return '👑';
      case 'Admin': return '🧙';
      case 'User': return '🤵';
    }
  }

}
