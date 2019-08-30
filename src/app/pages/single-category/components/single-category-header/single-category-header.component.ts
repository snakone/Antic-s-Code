import { Component, OnInit, Input } from '@angular/core';
import { Category } from '@app/shared/interfaces/interfaces';

@Component({
  selector: 'app-single-category-header',
  templateUrl: './single-category-header.component.html',
  styleUrls: ['./single-category-header.component.scss']
})

export class SingleCategoryHeaderComponent implements OnInit {

  @Input() category: Category;

  constructor() { }

  ngOnInit() { }

}
