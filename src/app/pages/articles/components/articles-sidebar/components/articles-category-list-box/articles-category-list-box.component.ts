import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MAIN_CATEGORIES } from '@shared/data/categories';
import { RandomizerPipe } from '@shared/pipes/randomizer/randomizer.pipe';

@Component({
  selector: 'app-articles-category-list-box',
  templateUrl: './articles-category-list-box.component.html',
  styleUrls: ['./articles-category-list-box.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ArticlesCategoryListBoxComponent {

  categories = this.random.transform(MAIN_CATEGORIES).slice(0, 6);

  constructor(private random: RandomizerPipe) { }
}
