import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Article } from '@shared/interfaces/interfaces';

@Component({
  selector: 'app-article-grid-card',
  templateUrl: './article-grid-card.component.html',
  styleUrls: ['./article-grid-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ArticleGridCardComponent {

  @Input() article: Article;
  @Input() search: boolean;  // Search Grid?
  @Input() title: boolean;   // Small Title on Search

  constructor() { }

}
