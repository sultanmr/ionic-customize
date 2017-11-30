import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {

  constructor(private viewController: ViewController) {
  }

  // ionViewWillEnter () {
  //   this.viewController.setBackButtonText('<--- Go Back');
  //   this.viewController.showBackButton(false);
  // }

}
