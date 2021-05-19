import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileInboxMobileComponent } from './profile-inbox-mobile.component';
import { ProfileInboxLeftModule } from '../profile-inbox-left/profile-inbox-left.module';
import { SpinnerModule } from '@shared/components/snippets/spinner/spinner.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [ProfileInboxMobileComponent],
  imports: [
    CommonModule,
    ProfileInboxLeftModule,
    SpinnerModule,
    TranslateModule
  ],
  exports: [ProfileInboxMobileComponent]
})

export class ProfileInboxMobileModule { }
