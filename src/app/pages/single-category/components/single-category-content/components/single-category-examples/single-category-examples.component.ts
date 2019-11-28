import { Component, OnInit, Input } from '@angular/core';
import { Category } from '@app/shared/interfaces/interfaces';

@Component({
  selector: 'app-single-category-examples',
  templateUrl: './single-category-examples.component.html',
  styleUrls: ['./single-category-examples.component.scss']
})

export class SingleCategoryExamplesComponent implements OnInit {

  @Input() category: Category;

  constructor() { }

  ngOnInit() { }

}
