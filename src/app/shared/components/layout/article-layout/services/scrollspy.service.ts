import { Injectable, EventEmitter } from '@angular/core';
import { ScrollSpy } from '@app/shared/interfaces/interfaces';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ScrollSpyService {

  hasEntered = new Subject<ScrollSpy>();

  constructor() { }
}
