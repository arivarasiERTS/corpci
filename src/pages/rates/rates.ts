import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Alert,AlertController} from 'ionic-angular';
import { SmilerateComponent } from '../../components/smilerate/smilerate';
import {ChatProvider} from '../../providers/chat/chat';

/**
 * Generated class for the RatesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-rates',
  templateUrl: 'rates.html',
})

export class RatesPage {

  constructor(public chatservice: ChatProvider, public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

    

rates(){
//this.chatservice.ratings(this.rating);
const alert: Alert = this.alertCtrl.create({
  message: "Thanks for rating",
  buttons: [{ text: 'Ok', role: 'cancel' }]
});
alert.present();
this.navCtrl.push('ThankyouPage');
}
  ionViewDidLoad() {
  
  }

}
