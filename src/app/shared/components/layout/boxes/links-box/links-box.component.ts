import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Link } from '@shared/interfaces/interfaces';

@Component({
  selector: 'app-links-box',
  templateUrl: './links-box.component.html',
  styleUrls: ['./links-box.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class LinksBoxComponent {

  @Input() links: Link[];

  constructor() { }

}
