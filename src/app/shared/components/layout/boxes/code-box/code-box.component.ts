import { Component, OnInit, Input } from '@angular/core';
import { Code } from '@app/shared/interfaces/interfaces';

@Component({
  selector: 'app-code-box',
  templateUrl: './code-box.component.html',
  styleUrls: ['./code-box.component.scss']
})

export class CodeBoxComponent implements OnInit {

  @Input() code: Code;
  @Input() list: boolean;  // to show on Code Page

  constructor() { }

  ngOnInit() { }

}
