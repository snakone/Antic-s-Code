import { Component, Input, OnInit } from '@angular/core';
import { News } from '@shared/interfaces/interfaces';

@Component({
  selector: 'app-news-home-grid',
  templateUrl: './news-home-grid.component.html',
  styleUrls: ['./news-home-grid.component.scss']
})

export class NewsHomeGridComponent implements OnInit {

  @Input() news: News[];

  constructor() { }

  ngOnInit(): void { }

}
