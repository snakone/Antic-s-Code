import { Component, OnInit, Input } from '@angular/core';
import { Code } from '@app/shared/interfaces/interfaces';

@Component({
  selector: 'app-code-box',
  templateUrl: './code-box.component.html',
  styleUrls: ['./code-box.component.scss']
})

export class CodeBoxComponent implements OnInit {

  @Input() code: Code;
  @Input() index: number;
  @Input() list: boolean;

  constructor() { }

  ngOnInit() { }

  showTooltip(code: Code): void {
    code.tooltip = true;
    setTimeout(() => { code.tooltip = false; }, 2000);
  }

}
