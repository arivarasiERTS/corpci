import { Injectable } from '@angular/core';
import firebase from 'firebase';

/*
  Generated class for the ChatProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ChatProvider {
  firedata = firebase.database().ref('/userProfile');
selected;
reqmsg;
nameg;
phoneg;
selg;
msgg;
rating;


  constructor() {  
 
  }



proceed(sel,msg)
{
  var userId = firebase.auth().currentUser.uid;
  return firebase.database().ref('/userProfile/' + userId).once('value').then(function(snapshot) {
    var username = (snapshot.val().name);
    var userphone = (snapshot.val().phone);
  firebase.database()
  .ref(`/userProfile/${firebase.auth().currentUser.uid}/requests`)
  .push({selected: sel,request: msg, requestedtime: firebase.database.ServerValue.TIMESTAMP});
  firebase.database()
  .ref(`/requests`)
  .push({user: username, selected: sel, request: msg, phone:userphone, requestedtime: firebase.database.ServerValue.TIMESTAMP});
});
}


proceedg(name,phone,sel,msg)
{
  firebase.database()
  .ref(`/guests`)
  .push({nameg: name, phoneg: phone, selg: sel,msgg: msg, requestedtime: firebase.database.ServerValue.TIMESTAMP});
  firebase.database()
  .ref(`/requests`)
  .push({user: name, phone: phone, selected: sel, request: msg, requestedtime: firebase.database.ServerValue.TIMESTAMP});
}

ratings(rating)
{
  firebase.database()
  .ref(`/rating`)
  .push({rating: rating});
}

}
