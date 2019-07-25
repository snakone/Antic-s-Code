import { Component, OnInit, ViewChild } from '@angular/core';
import { MatMenu } from '@angular/material/menu';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavBarComponent implements OnInit {

  collapse = false;
  @ViewChild('menu', { static: true}) menu: MatMenu;

  constructor() { }

  ngOnInit() {
    this.menu.closed.subscribe(() => this.collapse = !this.collapse);
  }

}
