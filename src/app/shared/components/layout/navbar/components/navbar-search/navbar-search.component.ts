import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-search',
  templateUrl: './navbar-search.component.html',
  styleUrls: ['./navbar-search.component.scss']
})

export class NavBarSearchComponent implements OnInit {

  focused = false;

  constructor() { }

  ngOnInit() { }

}
