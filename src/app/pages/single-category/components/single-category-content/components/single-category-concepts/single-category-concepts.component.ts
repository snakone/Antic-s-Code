import { Component, OnInit, Input } from '@angular/core';
import { Category } from '@app/shared/interfaces/interfaces';

@Component({
  selector: 'app-single-category-concepts',
  templateUrl: './single-category-concepts.component.html',
  styleUrls: ['./single-category-concepts.component.scss']
})

export class SingleCategoryConceptsComponent implements OnInit {

  @Input() category: Category;

  constructor() { }

  ngOnInit() { }

}
