import { Component, ViewChild } from '@angular/core';
import { Nav,Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { MaincontentPage } from '../pages/maincontent/maincontent';
import { MaincontentgPage } from '../pages/maincontentg/maincontentg';
import { PasswordresetPage } from '../pages/passwordreset/passwordreset';
import { GuestinfoPage } from '../pages/guestinfo/guestinfo';
import { UserreqPage } from '../pages/userreq/userreq';
import { AboutcPage } from '../pages/aboutc/aboutc';
import { ContactPage } from '../pages/contact/contact';
import { FaqsPage } from '../pages/faqs/faqs';
import { RateaPage } from '../pages/ratea/ratea';
import { RatesPage } from '../pages/rates/rates';
import { ThankyouPage } from '../pages/thankyou/thankyou';
import { ThankyougPage } from '../pages/thankyoug/thankyoug';
import { ComponentsModule } from '../components/Components.module';
import firebase from 'firebase';
import { firebaseConfig } from './credentials';
import { Unsubscribe } from '@firebase/util';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  

  rootPage: any;

 // pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    firebase.initializeApp(firebaseConfig);
    // used for an example of ngFor and navigation
    /*this.pages = [
    { title: 'Home', component: HomePage},
    { title: 'About Corpcare IT Solutions', component: AboutcPage},
      { title: 'FAQs', component: FaqsPage},
    { title: 'Contact Us', component: ContactPage},
      { title: 'Rate Our Service', component: RatesPage},
      { title: 'Rate this App', component: RateaPage}
    ];*/

    const unsubscribe: Unsubscribe = firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.rootPage = HomePage;
        unsubscribe();
      } else {
        this.rootPage = 'LoginPage';
        unsubscribe();
      }
    });
  }




  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  /*openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }*/
  opengPage(){
    this.nav.push('MaincontentgPage');
  }
  openurPage(){
    this.nav.push('UserreqPage');
  }
  openaPage(){
    this.nav.push('AboutcPage');
  }
  openfPage(){
    this.nav.push('FaqsPage');
  }
  opencPage(){
    this.nav.push('ContactPage');
  }
  openrsPage(){
    this.nav.push('RatesPage');
  }
  openraPage(){
    this.nav.push('RateaPage');
  }


  logoutUser(){
    firebase.auth().signOut().then(() => {
        this.nav.setRoot('LoginPage');
      });
    }


}
