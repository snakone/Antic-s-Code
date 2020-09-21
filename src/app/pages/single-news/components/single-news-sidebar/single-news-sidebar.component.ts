import { Component, Input, OnInit } from '@angular/core';
import { News } from '@shared/interfaces/interfaces';

@Component({
  selector: 'app-single-news-sidebar',
  templateUrl: './single-news-sidebar.component.html',
  styleUrls: ['./single-news-sidebar.component.scss']
})

export class SingleNewsSidebarComponent implements OnInit {

  @Input() notice: News;

  constructor() { }

  ngOnInit(): void {
  }

}
