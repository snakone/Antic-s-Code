import { Component, Input } from '@angular/core';
import { List } from '@shared/interfaces/interfaces';

@Component({
  selector: 'app-test-category-grid',
  templateUrl: './test-category-grid.component.html',
  styleUrls: ['./test-category-grid.component.scss']
})

export class TestCategoryGridComponent{

  @Input() categories: List[];

  constructor() { }

  public scroll(box: string): void {
    const el = document.getElementById(box);
    if (el) { el.scrollIntoView({ behavior: 'auto', block: 'start' }); }
  }

}
