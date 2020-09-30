import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestGuard } from '@core/guards/test.guard';

import { SingleTestComponent } from './single-test.component';
import { DoSingleTestComponent } from './components/do-single-test/do-single-test.component';
import { SingleTestContentComponent } from './components/single-test-content/single-test-content.component';

const routes: Routes = [
  {
    path: '',
    component: SingleTestComponent,
    children: [
      {
        path: '',
        component: SingleTestContentComponent
      },
      {
        path: ':uid',
        component: DoSingleTestComponent,
        canActivate: [TestGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class SingleTestRoutingModule { }
