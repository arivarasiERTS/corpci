import { Injectable } from '@angular/core';
import firebase from 'firebase';
import { HttpClient } from '@angular/common/http/';
import { HttpHeaders } from '@angular/common/http';

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


  constructor(private http: HttpClient) {  
 
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
  this.sendNotification();
}

ratings(rating)
{
  firebase.database()
  .ref(`/rating`)
  .push({rating: rating});
  this.sendNotification();
}

//Add this function and call it where you want to send it.
sendNotification() 
{  
let body = {
    "notification":{
      "title":"New Notification has arrived",
      "body":"Notification Body",
      "sound":"default",
      "click_action":"FCM_PLUGIN_ACTIVITY",
      "icon":"fcm_push_icon"
    },
    "data":{
      "param1":"value1",
      "param2":"value2"
    },
      "to":"/topics/all",
      "priority":"high",
      "restricted_package_name":""
  }
  let options = new HttpHeaders().set('Content-Type','application/json');
  this.http.post("https://fcm.googleapis.com/fcm/send",body,{
    headers: options.set('Authorization', 'key=AAAAoqCG4Ms:APA91bHQ_RDEV9UgzRysA8bo76RjlvKqs7TQ-j1BDLKfgE6G1fNqsSbYIFbOQ4psZtOTzTedGQBPVgNcAY8tstY093DttxKugh9ETaAUg5Zf24YND09KnJ0-WyNLJzPY1roMXL4M68P2'),
  })
    .subscribe();
}

}
