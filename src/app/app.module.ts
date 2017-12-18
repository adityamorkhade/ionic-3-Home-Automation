import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AccountProvider } from '../providers/account/account';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { RoomPage } from '../pages/room/room';
import { SwitchPage } from '../pages/switch/switch';
import { TabsPage } from '../pages/tabs/tabs';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@NgModule({
  declarations: [
    MyApp,
    ItemDetailsPage,
    ListPage,
    DashboardPage,
    RoomPage,
    SwitchPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    DashboardPage,
    RoomPage,
    SwitchPage,
    ItemDetailsPage,
    ListPage,
    TabsPage
  ],
  providers: [
    InAppBrowser,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AccountProvider
  ]
})
export class AppModule {}
