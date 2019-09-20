import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-conditions',
  templateUrl: './conditions.component.html',
  styleUrls: ['./conditions.component.scss']
})

export class ConditionsComponent implements OnInit {

  @Output() accepted = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() { }

  accept(): void {
    this.accepted.emit(true);
  }

}
