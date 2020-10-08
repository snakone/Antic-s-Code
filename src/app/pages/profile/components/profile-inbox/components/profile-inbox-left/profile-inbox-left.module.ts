import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { TranslateModule } from '@ngx-translate/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { PipesModule } from '@shared/pipes/pipes.module';

import { ProfileInboxLeftComponent } from './profile-inbox-left.component';
import { InboxSearchComponent } from './components/inbox-search/inbox-search.component';
import { InboxCardComponent } from './components/inbox-card/inbox-card.component';
import { SpinnerModule } from '@shared/components/snippets/spinner/spinner.module';

const Material = [
  MatIconModule,
  MatCheckboxModule,
  MatInputModule,
  MatTooltipModule
];

@NgModule({
  declarations: [
    ProfileInboxLeftComponent,
    InboxSearchComponent,
    InboxCardComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    PipesModule,
    SpinnerModule,
    ...Material
  ],
  exports: [ProfileInboxLeftComponent]
})

export class ProfileInboxLeftModule { }
