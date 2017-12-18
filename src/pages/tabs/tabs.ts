import { Component } from '@angular/core';

import { DashboardPage } from '../dashboard/dashboard';
import { RoomPage } from '../room/room';
import { SwitchPage } from '../switch/switch';

@Component({
    templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = DashboardPage;
  tab2Root = RoomPage;
  tab3Root = SwitchPage;

  constructor() {

  }
}
