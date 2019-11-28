import { Component, Input, AfterViewInit } from '@angular/core';
import hljs from 'highlight.js';

@Component({
  selector: 'app-content-maker',
  templateUrl: './content-maker.component.html'
})

export class ContentMakerComponent implements AfterViewInit {

  @Input() template?: string;

  constructor() { hljs.configure({ tabReplace: ' ' }); }

  ngAfterViewInit(): void {
    this.initHightlight();
  }

  private initHightlight(): void {
    const template = document.querySelectorAll('code');
    template.forEach(el => hljs.highlightBlock(el));
  }

}

