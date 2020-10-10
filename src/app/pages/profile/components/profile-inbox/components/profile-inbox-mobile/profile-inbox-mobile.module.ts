import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileInboxMobileComponent } from './profile-inbox-mobile.component';
import { ProfileInboxLeftModule } from '../profile-inbox-left/profile-inbox-left.module';
import { SpinnerModule } from '@shared/components/snippets/spinner/spinner.module';

@NgModule({
  declarations: [ProfileInboxMobileComponent],
  imports: [
    CommonModule,
    ProfileInboxLeftModule,
    SpinnerModule
  ],
  exports: [ProfileInboxMobileComponent]
})

export class ProfileInboxMobileModule { }
