import { Component, Input } from '@angular/core';
import { Code } from '@app/shared/interfaces/interfaces';

@Component({
  selector: 'app-code-box',
  templateUrl: './code-box.component.html',
  styleUrls: ['./code-box.component.scss']
})

export class CodeBoxComponent {

  @Input() code: Code;

  constructor() { }


}
