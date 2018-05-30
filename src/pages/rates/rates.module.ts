import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RatesPage } from './rates';
import { ComponentsModule } from '../../components/Components.module';

@NgModule({
  declarations: [
    RatesPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(RatesPage),
  ],
})
export class RatesPageModule {}
