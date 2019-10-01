import { NgModule } from '@angular/core';
import { LayoutModule } from '@app/shared/components/layout/layout.module';
import { SharedModule } from '@app/shared/shared.module';

import { CategoriesRouting } from './categories-routing';
import { CategoriesComponent } from './categories.component';

@NgModule({
  declarations: [CategoriesComponent],
  imports: [
    LayoutModule,
    SharedModule,
    CategoriesRouting
  ]
})

export class CategoriesModule { }
