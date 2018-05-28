import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GuestinfoPage } from './guestinfo';

@NgModule({
  declarations: [
    GuestinfoPage,
  ],
  imports: [
    IonicPageModule.forChild(GuestinfoPage),
  ],
})
export class GuestinfoPageModule {}
