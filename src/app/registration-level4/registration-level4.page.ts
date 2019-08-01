import { FirebaseService } from './../services/firebase/firebase.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from 'src/_helpers/must-match.validator';

@Component({
  selector: 'app-registration-level4',
  templateUrl: './registration-level4.page.html',
  styleUrls: ['./registration-level4.page.scss'],
})
export class RegistrationLevel4Page implements OnInit {
  lat: number = 51.678418;
  lng: number = 7.809007;
  registerForm: FormGroup;
  submitted: boolean = false;
  constructor(public router: Router, private formBuilder: FormBuilder, private firebaseService: FirebaseService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({ 
      location: ['', [Validators.required]],
      neighbour: ['', Validators.required]
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  setAddress(addrObj) {
     console.log(addrObj);
  }

    register(){
      this.submitted = true;
  
      if (this.registerForm.invalid) {
        return;
      } 
      this.firebaseService.registerUser4(this.registerForm.value).then(res => {
        this.router.navigateByUrl('routine'); 
      });     
    }

}
