import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateRouting } from './create.routing';
import { CreateComponent } from './create.component';
import { SharedModule } from '@app/shared/shared.module';
import { LayoutModule } from '@layout/layout.module';
import { CreateSidebarComponent } from './components/create-sidebar/create-sidebar.component';

@NgModule({
  declarations: [CreateComponent, CreateSidebarComponent],
  imports: [
    CommonModule,
    LayoutModule,
    SharedModule,
    CreateRouting
  ]
})

export class CreateModule { }
