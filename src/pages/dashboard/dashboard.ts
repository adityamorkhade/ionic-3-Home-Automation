import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SwitchPage } from '../switch/switch';

@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {
  title: string = 'Home';
  dashCard: any = [];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {}

  tapped() {
    this.navCtrl.push(SwitchPage);
  }
  ionViewDidLoad() {
    
    console.log('ionViewDidLoad DashboardPage');
  }

}
