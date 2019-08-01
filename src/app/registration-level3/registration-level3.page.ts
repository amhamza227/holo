import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FirebaseService } from './../services/firebase/firebase.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration-level3',
  templateUrl: './registration-level3.page.html',
  styleUrls: ['./registration-level3.page.scss'],
})
export class RegistrationLevel3Page implements OnInit {
  registerForm: FormGroup;
  submitted: boolean = false;
  constructor(public alertController: AlertController, public router: Router, private formBuilder: FormBuilder, private firebaseService: FirebaseService) { 
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({ 
      name: ['', [Validators.required]],
      carModel: ['', [Validators.required]],
      color: ['', Validators.required],
      seats: ['', Validators.required],
      place: ['', Validators.required]
    });
  }
  
  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  register(){
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    } 
    this.firebaseService.registerUser3(this.registerForm.value).then(res => {
      this.router.navigateByUrl('home'); 
	  });
    
  }

}
