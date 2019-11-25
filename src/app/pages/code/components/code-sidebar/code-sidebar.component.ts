import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { TAGS_ICON } from '@app/shared/shared.data';

@Component({
  selector: 'app-code-sidebar',
  templateUrl: './code-sidebar.component.html',
  styleUrls: ['./code-sidebar.component.scss']
})

export class CodeSidebarComponent implements OnInit {

  @Output() tag: EventEmitter<string> = new EventEmitter<string>();
  tags = TAGS_ICON;

  constructor() { }

  ngOnInit() { }

  filter(tag: string): void {
    this.tag.emit(tag);
    window.dispatchEvent(new Event('resize'));
    this.scroll('code-section');
  }

  scroll(box: string): void {
    const el = document.getElementById(box);
    if (el) { el.scrollIntoView({ behavior: 'auto', block: 'start' }); }
  }

}
