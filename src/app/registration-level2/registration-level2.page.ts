import { MustMatch } from 'src/_helpers/must-match.validator';
import { FirebaseService } from './../services/firebase/firebase.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-registration-level2',
  templateUrl: './registration-level2.page.html',
  styleUrls: ['./registration-level2.page.scss'],
})
export class RegistrationLevel2Page implements OnInit {
  registerForm: FormGroup;
  submitted: boolean = false;
  constructor(public alertController: AlertController, public router: Router,  private formBuilder: FormBuilder, private firebaseService: FirebaseService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({ 
      email: ['', [Validators.required, Validators.email]],
      kids: ['', [Validators.required]],
      grade: ['', Validators.required],
      group: ['', Validators.required]
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  register(){
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    } 
    this.firebaseService.registerUser2(this.registerForm.value).then(res => {
      this.presentAlertConfirm();
	  });
    
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
