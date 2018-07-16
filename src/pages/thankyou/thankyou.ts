import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ChatProvider} from '../../providers/chat/chat';

/**
 * Generated class for the ThankyouPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-thankyou',
  templateUrl: 'thankyou.html',
})
export class ThankyouPage {
//rating: number;
  constructor(public chatservice: ChatProvider, public navCtrl: NavController, public navParams: NavParams) {
    //this.rating = navParams.get('data');
   //this.chatservice.ratings(this.rating);
  }


  openReq(){
    this.navCtrl.push('UserreqPage');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ThankyouPage');
  }

}
