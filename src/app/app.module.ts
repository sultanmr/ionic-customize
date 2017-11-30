import { UserPage } from './../pages/user/user';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

@NgModule({
  declarations: [
    UserPage,
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    //more info is on http://ionicframework.com/docs/api/config/Config/
    IonicModule.forRoot(MyApp, {
      backButtonText: '<-- Move Back',
      iconMode: 'ios',
      platforms: {
        ios: {
          backButtonText: 'Back'
        }
      }
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    UserPage,
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
