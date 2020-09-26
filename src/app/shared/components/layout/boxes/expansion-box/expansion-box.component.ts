import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-expansion-box',
  templateUrl: './expansion-box.component.html',
  styleUrls: ['./expansion-box.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ExpansionBoxComponent {

  @Input() title: string;
  @Input() icon: string;

  constructor() { }

}
