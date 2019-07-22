import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration-level1',
  templateUrl: './registration-level1.page.html',
  styleUrls: ['./registration-level1.page.scss'],
})
export class RegistrationLevel1Page implements OnInit {
  isLinear = true;
  constructor(public router: Router) { }

  ngOnInit() {
  }

  register(){
    this.router.navigateByUrl('registration-level2');
  }

}
