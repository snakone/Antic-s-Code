import { Component, Input, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Code } from '@app/shared/interfaces/interfaces';
import hljs from 'highlight.js';

@Component({
  selector: 'app-code-box',
  templateUrl: './code-box.component.html',
  styleUrls: ['./code-box.component.scss']
})

export class CodeBoxComponent implements AfterViewInit {

  @Input() code: Code;
  @ViewChild('hl', {static: false}) hl: ElementRef;

  constructor() { hljs.configure({ tabReplace: ' ' }); }

  ngAfterViewInit(): void {
    hljs.highlightBlock(this.hl.nativeElement);
  }

}
