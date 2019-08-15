import { Component, OnInit } from '@angular/core';
import { Article, Code } from '@app/shared/interfaces/interfaces';
import { Store } from '@ngrx/store';
import { AppState } from '@app/app.config';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.scss']
})

export class CodeComponent implements OnInit {

  code: Code[] = [];
  filtered: Code[] = [];

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.getCode();
  }

  getCode(): void {
    this.store.select('articleState')
      .subscribe((res: AppState) => {
        if (res.articles) {
          res.articles.forEach((x: Article) => {
            this.code.push(...x.code);
          });
          this.filtered = this.code;
        }
    });
  }

  filter(tag: string): void {
    this.filtered = this.code.map((x: Code) => {
      if (x.tags.includes(tag)) { return x; }
    });


  }

}
