import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
//import { AngularFireAuth} from 'angularfire2/auth';
//import { AngularFireDatabase} from 'angularfire2/database';
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

  constructor(public navCtrl: NavController, public navParams: NavParams, public chatservice: ChatProvider) {

  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad MaincontentPage');
  }

  picked(lap: string){
    this.chatservice.addsel(this.lap);
  }
  userReq(newmessage: string){
    this.chatservice.addmsg(this.newmessage);
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
