import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  // 接收数据用
  listData: Object;
  constructor(public navCtrl: NavController, private http: Http) {

  }

  ionViewDidLoad() { 

  	// 网络请求 
  	this.http.request('../../assets/message.json') 
  	.subscribe((res: Response) => { 
  		console.log(res)
  		this.listData = res; 
  	}); }

}
