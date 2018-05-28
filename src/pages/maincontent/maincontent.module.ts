import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MaincontentPage } from './maincontent';

@NgModule({
  declarations: [
    MaincontentPage,
  ],
  imports: [
    IonicPageModule.forChild(MaincontentPage),
  ],
})
export class MaincontentPageModule {}
