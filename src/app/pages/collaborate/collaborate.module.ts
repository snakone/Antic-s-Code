import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollaborateRoutingModule } from './collaborate.routing';
import { CollaborateComponent } from './collaborate.component';
import { LayoutModule } from '@app/shared/components/layout/layout.module';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  declarations: [CollaborateComponent],
  imports: [
    CommonModule,
    CollaborateRoutingModule,
    LayoutModule,
    SharedModule,
  ]
})

export class CollaborateModule { }
