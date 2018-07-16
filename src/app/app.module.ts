import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
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
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Geolocation } from '@ionic-native/geolocation';

import firebase from 'firebase';
import { AuthProvider } from '../providers/auth/auth';
import { ChatProvider } from '../providers/chat/chat';
import { ComponentsModule } from '../components/Components.module';
import {HttpClientModule} from '@angular/common/http';
import { AppRate } from '@ionic-native/app-rate';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MaincontentPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ComponentsModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MaincontentPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    ChatProvider,
    Geolocation,
    AppRate
  ]
})
export class AppModule {}
