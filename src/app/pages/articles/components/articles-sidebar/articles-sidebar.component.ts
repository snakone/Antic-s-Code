import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-articles-sidebar',
  templateUrl: './articles-sidebar.component.html',
  styleUrls: ['./articles-sidebar.component.scss']
})

export class ArticlesSidebarComponent {

  @Input() block: boolean;

  constructor() { }
}
