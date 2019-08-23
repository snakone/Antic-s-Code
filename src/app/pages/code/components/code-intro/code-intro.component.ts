import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-code-intro',
  templateUrl: './code-intro.component.html',
  styleUrls: ['./code-intro.component.scss']
})

export class CodeIntroComponent implements OnInit {

  @Input() total: number;

  constructor() { }

  ngOnInit() { }

}
