import { Component, OnInit, Renderer2, Inject, ElementRef } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})

export class SearchComponent implements OnInit {

  area: HTMLCollectionOf<Element>;

  constructor(@Inject(DOCUMENT) public document: Document,
              private render: Renderer2) { }

  ngOnInit() {
    this.area = this.document.getElementsByClassName('search-area');
  }

  focus() {
    this.render.addClass(this.area[0], 'has-focus');
  }

  focusout() {
    this.render.removeClass(this.area[0], 'has-focus');
  }

}
