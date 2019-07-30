import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, NgForm, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-header-search',
  templateUrl: './header-search.component.html',
  styleUrls: ['./header-search.component.scss']
})

export class HeaderSearchComponent implements OnInit {

  @ViewChild('f', { static: true }) ngForm: NgForm;
  searchForm: FormGroup;
  caterogies = [
    'Code',
    'Video',
    'Gaming',
    'Lifestyle',
    'Interview',
    'Review',
    'Antic'
  ];

  constructor() { }

  ngOnInit() {
    this.createSearchForm();
  }

  private createSearchForm(): void {
    this.searchForm = new FormGroup({
       title: new FormControl(null, []),
    category: new FormControl(null, []),
        code: new FormControl(null, [])
    });
  }

  onSubmit(): void {
    if (this.searchForm.invalid) { return; }
    console.log(this.searchForm.value);
  }

}
