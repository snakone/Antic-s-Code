import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-help-intro',
  templateUrl: './help-intro.component.html',
  styleUrls: ['./help-intro.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class HelpIntroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
