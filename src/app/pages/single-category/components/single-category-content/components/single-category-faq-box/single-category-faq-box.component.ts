import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Category } from '@app/shared/interfaces/interfaces';

@Component({
  selector: 'app-single-category-faq-box',
  templateUrl: './single-category-faq-box.component.html',
  styleUrls: ['./single-category-faq-box.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class SingleCategoryFaqBoxComponent {

  @Input() category: Category;

  constructor() { }

  public resize(): void {
    window.dispatchEvent(new Event('resize'));
  }

}
