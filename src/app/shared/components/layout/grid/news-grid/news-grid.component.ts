import { Component, Input, OnInit } from '@angular/core';
import { News } from '@shared/interfaces/interfaces';

@Component({
  selector: 'app-news-grid',
  templateUrl: './news-grid.component.html',
  styleUrls: ['./news-grid.component.scss']
})
export class NewsGridComponent implements OnInit {

  @Input() news: News[];

  constructor() { }

  ngOnInit(): void {
  }

}
