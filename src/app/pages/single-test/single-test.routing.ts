import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntryGuard } from '@core/guards/entry.guard';

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
        path: 'do',
        component: DoSingleTestComponent,
        canActivate: [EntryGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class SingleTestRoutingModule { }
