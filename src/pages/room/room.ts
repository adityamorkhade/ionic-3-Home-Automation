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
  datas: any = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: Http
  ) {
    this.http.get('http://192.168.0.108:8123/api/states/switch.light')
      .map(res => res.json()).subscribe(data => {
        this.datas = [data]
        console.log(this.datas);

      });
  }

  pushme() {
    this.http.post('http://192.168.0.108:8123/api/states/switch.light', {
      "state": "on"
    });
    console.log('pushed');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RoomPage');
  }

}
