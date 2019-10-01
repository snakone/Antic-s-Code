import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { SwipeMenuService } from '../../services/swipe-menu.service';

@Component({
  selector: 'app-mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.scss']
})

export class MobileMenuComponent implements OnInit {

  @Input() show: boolean;
  @ViewChild('menu', {static: false}) menu: ElementRef;

  constructor(private swipeMenu: SwipeMenuService) { }

  ngOnInit() { }

  closeMenu(): void {
    try {
      const menu = this.menu.nativeElement.classList;
      menu.remove('fadeInLeft');
      menu.add('fadeOutLeft');
    } catch (err) { console.log(err); }
    setTimeout(() => { this.swipeMenu.showMenuOnSwipe(false); }, 500);
  }

}
