//import { AngularFireAuth} from 'angularfire2/auth';
//import { AngularFireDatabase} from 'angularfire2/database';
//import { AngularFireAuth} from 'angularfire2/auth';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController,Alert,AlertController} from 'ionic-angular';
//import { AngularFireAuthModule } from 'angularfire2/auth';
import {Reqs} from '../../models/reqs';
import { AuthProvider } from '../../providers/auth/auth';
import {ChatProvider} from '../../providers/chat/chat';
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

  newmessage;
  name;
  phone;
  lap: string;

  constructor(public chatservice: ChatProvider, public alertCtrl: AlertController,
     public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController) {
       this.lap = navParams.get('data');
  }

//  ionViewDidLoad() {
//    console.log('ionViewDidLoad SignupPage');
//  }

async guestUser(name: string, phone: string, newmessage: string){
 try{
//  const result = await this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
  //  console.log(result);
  //  this.afAuth.authState.subscribe(auth => {
   let loader=this.loadingCtrl.create({
      content: 'Sending'
    });
    loader.present();
    this.newmessage = newmessage;
  this.chatservice.proceedg(this.name, this.phone,this.lap,this.newmessage);
         
    
  
      loader.dismiss();
      const alert: Alert = this.alertCtrl.create({
        message: "Your request is sent successfully. We will contact you soon.",
        buttons: [{ text: 'Ok', role: 'cancel' }]
      });
      alert.present();
      this.navCtrl.push('ThankyouPage');
  //  })
  }
  catch(e){
    console.error(e);
  }
}
}
