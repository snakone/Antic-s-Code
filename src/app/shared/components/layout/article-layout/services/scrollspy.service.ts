import { Injectable } from '@angular/core';
import { ScrollSpy } from '@app/shared/interfaces/interfaces';
import { Subject } from 'rxjs';

@Injectable()

export class ScrollSpyService {

  hasEntered = new Subject<ScrollSpy>();

  constructor() { }
}
