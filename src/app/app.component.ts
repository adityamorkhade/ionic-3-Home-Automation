import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { AccountPage } from '../pages/account/account';
import { LoginPage } from '../pages/login/login';
import { RoomPage } from '../pages/room/room';
import { SchedulePage } from '../pages/schedule/schedule';
import { SettingPage } from '../pages/setting/setting';
import { SwitchPage } from '../pages/switch/switch';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage = DashboardPage;
  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen
  ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Home', component: DashboardPage },
      { title: 'Account', component: AccountPage },
      { title: 'Login', component: LoginPage },
      { title: 'Room', component: RoomPage },
      { title: 'Schedule', component: SchedulePage },
      { title: 'Setting', component: SettingPage },
      { title: 'Switch', component: SwitchPage },      
      { title: 'My First List', component: ListPage }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}
