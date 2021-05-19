import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Article, Category } from '@shared/interfaces/interfaces';

@Component({
  selector: 'app-single-content-header-left',
  templateUrl: './single-content-header-left.component.html',
  styleUrls: ['./single-content-header-left.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class SingleContentHeaderLeftComponent {

  @Input() content: Article | Category;
  @Input() type: string;

  constructor() { }

}
