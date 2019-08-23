import { Component, OnInit, Input } from '@angular/core';
import { Category } from '@app/shared/interfaces/interfaces';

@Component({
  selector: 'app-single-category-header-right',
  templateUrl: './single-category-header-right.component.html',
  styleUrls: ['./single-category-header-right.component.scss']
})

export class SingleCategoryHeaderRightComponent implements OnInit {

  @Input() category: Category;

  constructor() { }

  ngOnInit() { }

}
