import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ThankyougPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-thankyoug',
  templateUrl: 'thankyoug.html',
})
export class ThankyougPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  openLogin(){
    this.navCtrl.push('LoginPage');
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ThankyougPage');
  }

}
