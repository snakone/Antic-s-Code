import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-level-bar',
  templateUrl: './level-bar.component.html',
  styleUrls: ['./level-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class LevelBarComponent implements OnInit {

  @Input() level: string;

  constructor() { }

  ngOnInit(): void {
  }

}
