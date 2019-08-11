import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-articles-search',
  templateUrl: './articles-search.component.html',
  styleUrls: ['./articles-search.component.scss']
})

export class ArticlesSearchComponent implements OnInit {

  value: string;
  valueChanged: Subject<string> = new Subject<string>();

  constructor() {
    this.valueChanged
      .pipe(
        debounceTime(2000),
        distinctUntilChanged()
      )
      .subscribe((change: string) => {
        console.log(change);
    });
   }

  ngOnInit() { }

  changed(value: string): void {
    this.valueChanged.next(value);
  }

}
