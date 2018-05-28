import { Injectable } from '@angular/core';
import firebase from 'firebase';

/*
  Generated class for the ChatProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ChatProvider {
  firedata = firebase.database().ref('/messages');

  constructor() {  
  }

addsel(sel){
  firebase.database()
  .ref(`/userProfile/${firebase.auth().currentUser.uid}/sel`)
  .set(sel);
}


addmsg(msg){
  firebase.database()
  .ref(`/userProfile/${firebase.auth().currentUser.uid}/msg`)
  .set(msg);
}




}
