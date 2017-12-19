import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SwitchPage } from '../switch/switch';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {
  title: string = 'Home';
  dashCard: any = [];
  //browser:any;
  
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private iab: InAppBrowser,
  ) { }

   openHA(){
   const browser = this.iab.create('http://192.168.0.108:8123/states');
   //browser.show();     
   }
  tapped() {
    this.navCtrl.push(SwitchPage);
  }
  ionViewDidLoad() {
    
    console.log('ionViewDidLoad DashboardPage');
  }

}
