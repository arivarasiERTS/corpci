//import { AngularFireAuth} from 'angularfire2/auth';
//import { AngularFireDatabase} from 'angularfire2/database';
//import { AngularFireAuth} from 'angularfire2/auth';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import firebase from 'firebase';
//import { AngularFireAuthModule } from 'angularfire2/auth';
//import {Reqs} from '../../models/reqs';
/**
 * Generated class for the GuestinfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-guestinfo',
  templateUrl: 'guestinfo.html',
})
export class GuestinfoPage {


  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController) {
  }

 ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

}
