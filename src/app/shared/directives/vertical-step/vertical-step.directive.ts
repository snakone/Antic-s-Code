import { StepperSelectionEvent } from '@angular/cdk/stepper';
import { Directive, HostListener } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[VerticalStep]'
})

export class VerticalStepDirective {

  constructor(private stepper: MatStepper) { }

  @HostListener('selectionChange', ['$event'])
    selectionChanged(selection: StepperSelectionEvent) {
      const index = selection.selectedIndex === 0 ? 0 : selection.selectedIndex - 1;
      const id = this.stepper._getStepLabelId(index);
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest'});
        }, 300);
      }
  }

}
