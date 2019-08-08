import { Component, OnInit } from '@angular/core';
import { FAQS } from '@app/shared/shared.data';

@Component({
  selector: 'app-single-category-faq-box',
  templateUrl: './single-category-faq-box.component.html',
  styleUrls: ['./single-category-faq-box.component.scss']
})

export class SingleCategoryFaqBoxComponent implements OnInit {

  faqs = FAQS;

  constructor() { }

  ngOnInit() { }

}
