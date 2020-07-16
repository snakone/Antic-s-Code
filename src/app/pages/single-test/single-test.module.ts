import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SingleTestRoutingModule } from './single-test.routing';
import { PageHeaderModule } from '@layout/page-header/page-header.module';
import { SectionModule } from '@layout/section/section.module';
import { TestAccessModule } from '@store/test/data-access/test-access.module';
import { ContentBoxModule } from '@layout/boxes/content-box/content-box.module';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from '@app/shared/shared.module';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { SpinnerModule } from '@shared/components/snippets/spinner/spinner.module';

import { SingleTestComponent } from './single-test.component';
import { SingleTestContentComponent } from './components/single-test-content/single-test-content.component';
import { SingleTestSidebarComponent } from './components/single-test-sidebar/single-test-sidebar.component';
import { DoSingleTestComponent } from './components/do-single-test/do-single-test.component';
import { TestStepperComponent } from './components/test-stepper/test-stepper.component';
import { RippleGlobalOptions, MAT_RIPPLE_GLOBAL_OPTIONS } from '@angular/material/core';

const globalRippleConfig: RippleGlobalOptions = {
  disabled: true,
  animation: {
    enterDuration: 0,
    exitDuration: 0
  }
};

const Material = [
  MatStepperModule,
  MatButtonModule,
  MatInputModule,
  MatRadioModule,
  MatIconModule
];

@NgModule({
  declarations: [
    SingleTestComponent,
    SingleTestContentComponent,
    SingleTestSidebarComponent,
    DoSingleTestComponent,
    TestStepperComponent
  ],
  imports: [
    CommonModule,
    SingleTestRoutingModule,
    PageHeaderModule,
    SectionModule,
    TestAccessModule,
    ContentBoxModule,
    SharedModule,
    SpinnerModule,
    ...Material
  ],
  providers: [
    { provide: MAT_RIPPLE_GLOBAL_OPTIONS, useValue: globalRippleConfig }
  ]
})

export class SingleTestModule { }
