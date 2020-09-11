import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@app/shared/shared.module';
import { ContentBoxModule } from '../boxes/content-box/content-box.module';

import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { DeleteAccountComponent } from './delete-account/delete-account.component';
import { NoAccountComponent } from './no-account/no-account.component';
import { MessageModalComponent } from './message-modal/message-modal.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';

const Material = [
  MatDialogModule,
  MatIconModule,
  MatFormFieldModule,
  MatButtonModule,
  MatInputModule,
  MatSelectModule
];

@NgModule({
  declarations: [
    DeleteAccountComponent,
    NoAccountComponent,
    MessageModalComponent,
    EditProfileComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ContentBoxModule,
    ...Material
  ]
})

export class DialogsModule { }
