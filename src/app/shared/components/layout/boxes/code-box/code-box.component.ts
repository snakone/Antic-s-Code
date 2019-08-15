import { Component, OnInit, Input } from '@angular/core';
import { ARTICLE_STYLES } from '@app/shared/components/article-maker/article-maker.styles';
import { Code } from '@app/shared/interfaces/interfaces';

@Component({
  selector: 'app-code-box',
  templateUrl: './code-box.component.html',
  styles: [ARTICLE_STYLES]
})

export class CodeBoxComponent implements OnInit {

  @Input() code: Code;
  @Input() index: number;

  constructor() { }

  ngOnInit() { }

  showTooltip(code: Code): void {
    code.tooltip = true;
    setTimeout(() => { code.tooltip = false; }, 2000);
  }

}
