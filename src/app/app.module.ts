import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AccountProvider } from '../providers/account/account';
import { AccountPage } from '../pages/account/account';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { LoginPage } from '../pages/login/login';
import { RoomPage } from '../pages/room/room';
import { SchedulePage } from '../pages/schedule/schedule';
import { SettingPage } from '../pages/setting/setting';
import { SignupPage } from '../pages/signup/signup';
import { SwitchPage } from '../pages/switch/switch';

@NgModule({
  declarations: [
    MyApp,
    ItemDetailsPage,
    ListPage,
    DashboardPage,
    AccountPage,
    LoginPage,
    RoomPage,
    SchedulePage,
    SettingPage,
    SignupPage,
    SwitchPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    DashboardPage,
    AccountPage,
    LoginPage,
    RoomPage,
    SchedulePage,
    SettingPage,
    SignupPage,
    SwitchPage,
    ItemDetailsPage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AccountProvider
  ]
})
export class AppModule {}
