import { UserPage } from './../user/user';
import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  userPage: any;
  constructor( private platform: Platform) {
    this.userPage = UserPage;
    console.log (platform._platforms);
  }


}
