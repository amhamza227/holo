import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RegistrationLevel4Page } from './registration-level4.page';

const routes: Routes = [
  {
    path: '',
    component: RegistrationLevel4Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RegistrationLevel4Page]
})
export class RegistrationLevel4PageModule {}
