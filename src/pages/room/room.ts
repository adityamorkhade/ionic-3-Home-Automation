import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Component({
  selector: 'page-room',
  templateUrl: 'room.html',
})
export class RoomPage {
  title: string = 'Rooms';

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: Http
  ) {
    this.http.get('http://hassbian.local:8123/api/states')
    .map(res => res.json()).subscribe(data => {

    console.log(data);

  });
  this.http.post('http://hassbian.local:8123/api/states/switch.fan', {
    "state": "on",
    "attributes": {"friendly_name": "Fan", "icon": "mdi:bulb"}
  });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RoomPage');
  }

}
