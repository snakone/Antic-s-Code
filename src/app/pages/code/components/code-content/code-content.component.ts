import { Component, OnInit, Input } from '@angular/core';
import { Code } from '@app/shared/interfaces/interfaces';

@Component({
  selector: 'app-code-content',
  templateUrl: './code-content.component.html',
  styleUrls: ['./code-content.component.scss']
})

export class CodeContentComponent implements OnInit {

  @Input() code: Code[];

  constructor() { }

  ngOnInit() { }

}
