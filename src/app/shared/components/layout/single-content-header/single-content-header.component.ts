import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Article, Category } from '@shared/interfaces/interfaces';

@Component({
  selector: 'app-single-content-header',
  templateUrl: './single-content-header.component.html',
  styleUrls: ['./single-content-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class SingleContentHeaderComponent {

  @Input() content: Article | Category;
  @Input() type: string;
  bgTop = ['Angular', 'Nodejs', 'Javascript', 'Deno'];

  constructor() { }

}
