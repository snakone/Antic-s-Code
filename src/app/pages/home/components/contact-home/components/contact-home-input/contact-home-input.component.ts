import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-contact-home-input',
  templateUrl: './contact-home-input.component.html',
  styleUrls: ['./contact-home-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ContactHomeInputComponent {

  email = '';

  constructor() { }

  onSubmit(): void {
    if (this.email === '') { return; }
  }

}
