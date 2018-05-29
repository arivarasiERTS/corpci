import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';
//import { AuthProvider } from '../../providers/auth/auth';
import {ChatProvider} from '../../providers/chat/chat';
/**
 * Generated class for the MaincontentgPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-maincontentg',
  templateUrl: 'maincontentg.html',
})
export class MaincontentgPage {
  lap;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MaincontentgPage');
  }
  picked(lap: string){
    this.lap = lap;
  }


getUserDetails(){
  this.navCtrl.push('GuestinfoPage',{data: this.lap});
}
}
