import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { News } from '@shared/interfaces/interfaces';

@Component({
  selector: 'app-news-content',
  templateUrl: './news-content.component.html',
  styleUrls: ['./news-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class NewsContentComponent implements OnInit {

  @Input() news: News[];

  constructor() { }

  ngOnInit(): void { }

}
