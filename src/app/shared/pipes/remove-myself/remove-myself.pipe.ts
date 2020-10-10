import { Pipe, PipeTransform } from '@angular/core';
import { User } from '@shared/interfaces/interfaces';

@Pipe({ name: 'removeMyself' })

export class RemoveMyselfPipe implements PipeTransform {

  transform(arr: User[], id: string): User[] {
    return arr.filter(u => u._id !== id);
  }

}
