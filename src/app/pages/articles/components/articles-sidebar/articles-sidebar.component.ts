import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-articles-sidebar',
  templateUrl: './articles-sidebar.component.html',
  styleUrls: ['./articles-sidebar.component.scss']
})

export class ArticlesSidebarComponent implements OnInit {

  @Input() single: boolean;

  constructor() { }

  ngOnInit() { }

}
