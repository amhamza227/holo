import { FirebaseService } from './../services/firebase/firebase.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from 'src/_helpers/must-match.validator';

@Component({
  selector: 'app-registration-level1',
  templateUrl: './registration-level1.page.html',
  styleUrls: ['./registration-level1.page.scss'],
})
export class RegistrationLevel1Page implements OnInit {
  isLinear = true;
  registerForm: FormGroup;
  submitted: boolean = false;
  constructor(public router: Router, private formBuilder: FormBuilder, private firebaseService: FirebaseService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, {
        validator: MustMatch('password', 'confirmPassword')
      });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  register() {
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    } 
    this.firebaseService.createUser(this.registerForm.value).then(res => {
      this.router.navigateByUrl('registration-level2');
	  });
  }

}
