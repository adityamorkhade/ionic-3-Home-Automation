import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-switch',
  templateUrl: 'switch.html',
})
export class SwitchPage {
  pageTitle:string = 'Switches';

  ws = new WebSocket('ws://192.168.0.110:8123/api/websocket');

  switchGroup: any = [
    {
      title: 'Bed Room', switch: ['Switch 1', 'Switch 2', 'Switch 3']
    }
  ]

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public toastCtrl: ToastController
  ) {
    //this.switchGroup = this.switchGroup;
  }

  switchOn(){
    this.ws.send('{"id": 2, "type": "call_service", "domain": "switch", "service": "turn_on", "service_data": {"entity_id": "switch.fan"}}\n');    
  }

  switchOff(){
    this.ws.send('{"id": 2, "type": "call_service", "domain": "switch", "service": "turn_off", "service_data": {"entity_id": "switch.fan"}}\n');    
  }

  presentToast(value: any, name:string, items:string) {
    if (value.checked == true) {

    this.ws.send('{"id": 2, "type": "call_service", "domain": "switch", "service": "turn_on", "service_data": {"entity_id": "switch.fan"}}\n');      

      let toast = this.toastCtrl.create({
        message: name + ' ' + items + ' ' + 'is ON',
        duration: 3000,
        position: 'bottom'
      });
      toast.present();
    } else if (value.checked == false) {

    this.ws.send('{"id": 2, "type": "call_service", "domain": "switch", "service": "turn_off", "service_data": {"entity_id": "switch.fan"}}\n');      

      let toast = this.toastCtrl.create({
        message: name + ' ' + items + ' ' + 'is OFF',
        duration: 3000,
        position: 'bottom'
      });
      toast.present();
    } 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SwitchPage');
  }

}
