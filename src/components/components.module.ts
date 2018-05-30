import { NgModule } from '@angular/core';
import { SmilerateComponent } from './smilerate/smilerate';
import { IonicModule } from 'ionic-angular';
@NgModule({
	declarations: [SmilerateComponent],
	imports: [IonicModule],
	exports: [SmilerateComponent]
})
export class ComponentsModule {}
