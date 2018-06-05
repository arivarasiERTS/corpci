import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public menuCtrl: MenuController, public navCtrl: NavController, public navParams: NavParams) {
   
  }

  ionViewDidLoad() {
    this.menuCtrl.enable(false, 'authenticated');
    this.menuCtrl.enable(true, 'unauthenticated');
    console.log('ionViewDidLoad HomePage');
  }
  openMainContent() {
    this.navCtrl.push('MaincontentgPage');
  }
  openLogin() {
    this.navCtrl.push('LoginPage');
  }
}
