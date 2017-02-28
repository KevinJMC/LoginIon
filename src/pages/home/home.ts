import { Component } from '@angular/core';

import { NavController, AlertController } from 'ionic-angular';
import { AuthenticJSON } from '../../providers/authentic-json';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  isValid: string;
  username: String;
  password: String;

  constructor(public navCtrl: NavController, private alertCtrl: AlertController, private authJSON: AuthenticJSON) {
    
  }

  showSuccessAlert() {
   let alert = this.alertCtrl.create({
     title: "Success!",
     subTitle: 'Successful login!',
     buttons: ['Great']
   });
   alert.present();
 }
 
  showDenyAlert() {
   let alert = this.alertCtrl.create({
     title: 'Access Denied!',
     subTitle: 'Your login was unsucessful! Try Again?',
     buttons: ['I Will']
   });
   alert.present();
 }
 
 onSubmit() {
    this.authJSON.sendData(this.username, this.password);
    this.isValid = this.authJSON.data;
    if(this.isValid) {
      this.showSuccessAlert();
    } else {
      this.showDenyAlert();
    }
 }

}
