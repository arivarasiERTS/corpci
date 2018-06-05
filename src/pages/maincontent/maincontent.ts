import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController,Alert,AlertController} from 'ionic-angular';
import { MenuController } from 'ionic-angular';
import firebase from 'firebase';
import { AuthProvider } from '../../providers/auth/auth';
import {ChatProvider} from '../../providers/chat/chat';
import {User} from '../../models/user';
/**
 * Generated class for the MaincontentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-maincontent',
  templateUrl: 'maincontent.html',
})
export class MaincontentPage {
lap;
newmessage;

  constructor(public menuCtrl: MenuController, public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public loadingCtrl: LoadingController, public chatservice: ChatProvider) {
    this.menuCtrl.enable(true, 'authenticated');
    this.menuCtrl.enable(false, 'unauthenticated');
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad MaincontentPage');
  }

  picked(lap: string){
    this.lap = lap;
  }
  userReq(newmessage: string){
    let loader=this.loadingCtrl.create({
      content: 'Sending'
    });
    loader.present();
    this.newmessage = newmessage;
    this.chatservice.proceed(this.lap,this.newmessage);
    loader.dismiss();
    const alert: Alert = this.alertCtrl.create({
      message: "Your request is sent successfully. We will contact you soon.",
      buttons: [{ text: 'Ok', role: 'cancel' }]
    });
    alert.present();
    this.navCtrl.push('ThankyouPage');
  }

userReqdis(){
  this.navCtrl.push('UserreqPage');
}
  logoutUser(){
  firebase.auth().signOut().then(() => {
      this.navCtrl.setRoot('LoginPage');
    });
      }


}
