import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SwipeMenuService {

  show: Subject<boolean> = new Subject<boolean>();
  opened = false;

  constructor() { }

  public showMenuOnSwipe(value: boolean) {
    this.show.next(value);
    this.opened = value;
  }
}
