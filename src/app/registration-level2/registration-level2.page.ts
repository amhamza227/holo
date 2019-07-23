import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-registration-level2',
  templateUrl: './registration-level2.page.html',
  styleUrls: ['./registration-level2.page.scss'],
})
export class RegistrationLevel2Page implements OnInit {

  constructor(public alertController: AlertController, public router: Router) { }

  ngOnInit() {
  }

  register(){
    this.presentAlertConfirm();
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      mode: 'ios',
      header: 'Confirm!',
      message: '<img src="./../../assets/imgs/person-wheel.png"><br>Messagetext</img>!!!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            this.router.navigateByUrl('registration-level4'); 
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {
            this.router.navigateByUrl('registration-level3'); 
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }

}
