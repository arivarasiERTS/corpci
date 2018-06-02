import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
//import { AngularFireAuth} from 'angularfire2/auth';
//import { AngularFireDatabase} from 'angularfire2/database';
import firebase from 'firebase';
import {ChatProvider} from '../../providers/chat/chat';
//import {User} from '../../models/user';
/**
 * Generated class for the UserreqPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-userreq',
  templateUrl: 'userreq.html',
})
export class UserreqPage {
 database = firebase.database();
 users = [];

//public user = {} as User;

//requests: string;
constructor(public navCtrl: NavController, public navParams: NavParams, public chatservice: ChatProvider) {

}
ionViewDidLoad() {
  this.users = [];
  //var userId = firebase.auth().currentUser.uid;
  let temp;
  const personRef: firebase.database.Reference = firebase.database().ref(`/userProfile/${firebase.auth().currentUser.uid}/requests`);
  personRef.once('value', personSnapshot => {
    temp = personSnapshot.val();
    for(var tempkey in temp){
      this.users.push(temp[tempkey]);
    }
  //  this.events.publish('requests');
  });
}


}
