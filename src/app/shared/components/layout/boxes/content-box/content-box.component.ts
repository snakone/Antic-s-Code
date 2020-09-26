import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-content-box',
  templateUrl: './content-box.component.html',
  styleUrls: ['./content-box.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ContentBoxComponent {

  @Input() title: string;
  @Input() icon: string;
  @Input() border: boolean;
  @Input() margin = true;

  constructor() { }

}
