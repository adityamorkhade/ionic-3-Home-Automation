import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-switch',
  templateUrl: 'switch.html',
})
export class SwitchPage {
  pageTitle:string = 'Switches'
  switchGroup: any = [
    {
      title: 'Bed Room', switch: ['Switch 1', 'Switch 2', 'Switch 3']
    },
    {
      title: 'Kitchen', switch: ['Switch 1', 'Switch 2']
    },
    {
      title: 'Hall', switch: ['Switch 1', 'Switch 2', 'Switch 3', 'Switch 4']
    },
    {
      title: 'Bath Room', switch: ['Switch 1', 'Switch 2']
    },
    {
      title: 'Office', switch: ['Office Switch 1', 'Office Switch 2']
    }
  ]

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public toastCtrl: ToastController
  ) {
    //this.switchGroup = this.switchGroup;
  }
  presentToast(value: any, name:string, items:string) {
    console.log('value: ', value.checked);
    console.log('value: ', value);    
    if (value.checked == true) {
      let toast = this.toastCtrl.create({
        message: name + ' ' + items + ' ' + 'is ON',
        duration: 3000,
        position: 'bottom'
      });
      toast.present(toast);
    } else if (value.checked == false) {
      let toast = this.toastCtrl.create({
        message: name + ' ' + items + ' ' + 'is OFF',
        duration: 3000,
        position: 'bottom'
      });
      toast.present(toast);
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SwitchPage');
  }

}
