import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class IntersectionService {

  @Output() hasEntered: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }
}
