import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

import { SearchFacade } from '@store/search/search.facade';
import { Article } from '@shared/interfaces/interfaces';

@Component({
  selector: 'app-related-tags-box',
  templateUrl: './related-tags-box.component.html',
  styleUrls: ['./related-tags-box.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class RelatedTagsBoxComponent {

  @Input() article: Article;
  @Input() related: Article[];

  constructor(
    private searchFacade: SearchFacade,
    private router: Router
  ) { }

  public seeMore(): void {
    this.searchFacade.search({value: '', tags: this.article.tags});
    this.router.navigateByUrl('/search');
  }

}
