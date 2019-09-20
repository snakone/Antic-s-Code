import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ScrollSpy } from '@app/shared/interfaces/interfaces';

@Injectable()

export class ScrollSpyService {

  hasEntered = new Subject<ScrollSpy>();

  constructor() { }
}
