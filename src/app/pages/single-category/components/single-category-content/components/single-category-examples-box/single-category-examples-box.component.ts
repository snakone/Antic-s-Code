import { Component, OnInit, Input } from '@angular/core';
import { Category } from '@app/shared/interfaces/interfaces';

@Component({
  selector: 'app-single-category-examples-box',
  templateUrl: './single-category-examples-box.component.html',
  styleUrls: ['./single-category-examples-box.component.scss']
})

export class SingleCategoryExamplesBoxComponent implements OnInit {

  @Input() category: Category;

  constructor() { }

  ngOnInit() { }

}
