import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TestEntry, TestRequest } from '@shared/interfaces/interfaces';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';

import { UserService } from '@core/services/user/user.service';

@Component({
  selector: 'app-test-stepper',
  templateUrl: './test-stepper.component.html',
  styleUrls: ['./test-stepper.component.scss'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS,
    useValue: { displayDefaultIndicatorType: false }
  }]
})

export class TestStepperComponent implements OnInit {

  orientation: string;
  selected: string[];
  @Input() entry: TestEntry;
  @Output() completed = new EventEmitter<TestRequest>();

  constructor(private userSrv: UserService) { }

  ngOnInit() {
    this.selected = this.makeStepSelector();
  }

  public makeStepSelector(): string[] {
    return new Array<string>(this.entry.questions.length).fill(null);
  }

  public finish(): void {
    const values: string[] = JSON.parse(JSON.stringify(this.selected));

    const request: TestRequest = {
      uid: this.entry.uid,
      title: this.entry.title,
      category: this.entry.category,
      user: this.userSrv.getUser()._id || null,
      level: this.entry.level,
      request: values
    };

    this.completed.emit(request);
  }

  public trackByIdx(index: number): number {
    return index;
  }

}
