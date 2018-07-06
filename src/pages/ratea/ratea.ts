import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppRate } from '@ionic-native/app-rate';

/**
 * Generated class for the RateaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ratea',
  templateUrl: 'ratea.html',
})
export class RateaPage {

  constructor(private appRate: AppRate, public navCtrl: NavController, public navParams: NavParams) {
  }
  rateMe(){
    this.appRate.preferences.storeAppURL = {
    ios: '< my_app_id >',
    android: 'market://details?id=< package_name >',
    windows: 'ms-windows-store://review/?ProductId=< Store_ID >'
    };

    this.appRate.promptForRating(true); 
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad RateaPage');
  }

}
