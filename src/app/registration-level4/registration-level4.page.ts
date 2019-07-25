import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration-level4',
  templateUrl: './registration-level4.page.html',
  styleUrls: ['./registration-level4.page.scss'],
})
export class RegistrationLevel4Page implements OnInit {

  lat: number = 51.678418;
  lng: number = 7.809007;

  constructor(public router: Router) { }

  ngOnInit() {
  }

  setAddress(addrObj) {
     console.log(addrObj)
  }

  register(){
    this.router.navigateByUrl('routine');
  }

}
