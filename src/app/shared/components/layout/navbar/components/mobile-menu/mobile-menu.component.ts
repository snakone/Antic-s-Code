import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MENU, HOME_MENU } from '@app/shared/shared.data';

@Component({
  selector: 'app-mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.scss']
})

export class MobileMenuComponent implements OnInit {

  @Output() close: EventEmitter<void> = new EventEmitter<void>();
  items = MENU;
  menu = HOME_MENU;

  constructor() { }

  ngOnInit() { }

  closeDrawer(): void {
    this.close.emit();
  }

}
